import React from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

// import { Container } from './styles';

const styles = StyleSheet.create({
  map: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default function Main() {
  return (
    <>
      <Text>Mapas</Text>
      <MapView style={styles.map} />
    </>
  );
}
