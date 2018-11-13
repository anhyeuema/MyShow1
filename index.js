
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
AppRegistry.registerComponent(appName, () => Bai1);
import React, { Component } from 'react';

import App from './src/Components/App';

export default class Bai1 extends Component {
  render() {
    return (
        <App />
    );
  }
}