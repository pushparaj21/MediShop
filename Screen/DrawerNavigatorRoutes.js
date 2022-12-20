import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase/firebase-config';
import List from './DrawerScreens/ListPage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Register from './DrawerScreens/RegisterShop';

function Logout({navigation}) {
  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('signout successful');
        navigation.navigate('Auth');
      })
      .catch(error => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={signout}>
        <Text style={styles.buttonTextStyle}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function DrowerNavigatorRoutes() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Stores" component={List} />
      <Drawer.Screen name="Register shop" component={Register} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
export default DrowerNavigatorRoutes;
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    width: '25%',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
