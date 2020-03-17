/* eslint-disable react/prop-types */
import Geolocation from '@react-native-community/geolocation';
import React, { useState, useEffect, useCallback } from 'react';
import { Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

import loadingEffect from '../../assets/loading.json';
import api from '../../services/api';
import { connect, disconnect, subscribeToNewDevs } from '../../services/socket';
import {
  Map,
  Avatar,
  DevProfile,
  DevName,
  DevBio,
  DevTechs,
  SearchForm,
  SearchInput,
  SearchButton,
  HomeButton,
  TextButton,
  ErrorMessage,
  LoadingContainer,
  Loading,
} from './styles';

export default function Main({ navigation }) {
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('');
  const [currentRegion, setcurrentRegion] = useState(null);
  const [error, setError] = useState('');

  console.tron.log('devs', devs);

  useEffect(() => {
    async function loadInitialPosition() {
      await Geolocation.getCurrentPosition(
        pos => {
          setTimeout(() => {
            setcurrentRegion({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
          }, 2000);
        },
        err => setError(err.message)
      );
    }
    loadInitialPosition();
  }, []);

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]));
  }, [devs]);

  const HomePosition = useCallback(async () => {
    await Geolocation.getCurrentPosition(
      pos => {
        setcurrentRegion({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      },
      err => setError(err.message)
    );
  });

  function setupWebsocket() {
    disconnect();

    const { latitude, longitude } = currentRegion;

    connect(latitude, longitude, techs);
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;
    try {
      const response = await api.get('/search', {
        params: {
          latitude,
          longitude,
          techs,
        },
      });
      setDevs(response.data);
    } catch (err) {
      console.tron.log(err);
    }
    setupWebsocket();
  }

  function handleRegionChange(region) {
    setcurrentRegion(region);
  }

  if (!currentRegion) {
    return (
      <LoadingContainer>
        <Loading resizeMode="contain" source={loadingEffect} autoPlay loop />
      </LoadingContainer>
    );
  }

  return (
    <>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <Map
        onRegionChangeComplete={handleRegionChange}
        initialRegion={currentRegion}
        region={currentRegion}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: dev.location.coordinates[1],
              longitude: dev.location.coordinates[0],
            }}
          >
            <Avatar
              source={{
                uri: dev.avatar_url,
              }}
            />
            <Callout
              onPress={() => {
                navigation.navigate('Profile', {
                  github_username: dev.github_username,
                });
              }}
            >
              <DevProfile>
                <DevName>{dev.name}</DevName>
                {dev.bio ? <DevBio>{dev.bio}</DevBio> : null}
                <DevTechs>{dev.techs.join(', ')}</DevTechs>
              </DevProfile>
            </Callout>
          </Marker>
        ))}
      </Map>
      <SearchForm>
        <HomeButton onPress={HomePosition}>
          <TextButton>
            <Icon name="map-pin" size={20} color="#fff" />
          </TextButton>
        </HomeButton>
        <SearchInput
          placeholder="Find devs for techs..."
          autoCapitalize="words"
          autoCorrect={false}
          style={{ elevation: 2 }}
          value={techs}
          onChangeText={setTechs}
        />
        <SearchButton onPress={loadDevs}>
          <TextButton>
            <Icon name="street-view" size={20} color="#fff" />
          </TextButton>
        </SearchButton>
      </SearchForm>
    </>
  );
}
