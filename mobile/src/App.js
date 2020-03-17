import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './routes';

import './config/ReactotronConfig';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
