import React, { Component } from 'react';
import {
  Text,
  AppRegistry
} from 'react-native';

//define our root Component
class ReactCalculator extends Component {

  render() {
    return (
      <Text>Hello, React!</Text>
    )
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
