/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Login from './Screen/Login';
import Register from './Screen/Register';
import Splash from './Screen/Splash';
import DrowerNavigatorRoutes from './Screen/DrawerNavigatorRoutes';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'Register'}}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          // options={{title: 'splash'}}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigatorRoutes"
          component={DrowerNavigatorRoutes}
          // options={{title: 'DrowerNavigatorRoutes'}}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
