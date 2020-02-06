/* eslint-disable react/prop-types */
import Geolocation from '@react-native-community/geolocation';
import React, { useState, useEffect } from 'react';
import { Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

import loadingEffect from '../../assets/loading.json';
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
  TextButton,
  ErrorMessage,
  LoadingContainer,
  Loading,
} from './styles';

export default function Main({ navigation }) {
  const [currentRegion, setcurrentRegion] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadInitialPosition() {
      await Geolocation.getCurrentPosition(
        pos => {
          console.tron.log(pos);
          setTimeout(() => {
            setcurrentRegion({
              // latitude: pos.coords.latitude,
              // longitude: pos.coords.longitude,
              latitude: -6.4300316,
              longitude: -36.6405084,
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
      <Map initialRegion={currentRegion}>
        <Marker coordinate={{ latitude: -6.431759, longitude: -36.6420957 }}>
          <Avatar
            source={{
              uri:
                'https://avatars3.githubusercontent.com/u/11464809?s=460&v=4',
            }}
          />
          <Callout
            onPress={() => {
              navigation.navigate('Profile', { github_username: 'pedrolgcs' });
            }}
          >
            <DevProfile>
              <DevName>Pedro H.</DevName>
              <DevBio>Love Javascript</DevBio>
              <DevTechs>Node, React</DevTechs>
            </DevProfile>
          </Callout>
        </Marker>
      </Map>
      <SearchForm>
        <SearchInput
          placeholder="Find devs for techs..."
          autoCapitalize="words"
          autoCorrect={false}
          style={{ elevation: 2 }}
        />
        <SearchButton onPress={() => {}}>
          <TextButton>
            <Icon name="location-arrow" size={20} color="#fff" />
          </TextButton>
        </SearchButton>
      </SearchForm>
    </>
  );
}
