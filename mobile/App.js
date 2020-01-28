import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './src/config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello OmniStack!</Text>
    </View>
  );
}
