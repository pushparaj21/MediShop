/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Login from './Screen/Login';
import Register from './Screen/Register';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SafeAreaView} from 'react-native';
import Flex from './Screen/Test';

const App = () => {
  return (
    <SafeAreaView>
      {/* <Register /> */}
      <Flex />
    </SafeAreaView>
  );
};
export default App;
