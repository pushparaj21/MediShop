import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlipInEasyX} from 'react-native-reanimated';
import {auth} from '../firebase/firebase-config';

const Splash = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      setAnimating(false);
      try {
        const value = await AsyncStorage.getItem('useri3d');
        navigation.replace(value != null ? 'DrawerNavigatorRoutes' : 'Auth');
      } catch (e) {
        console.log(e);
      }
    }, 3000);
  });
  return (
    <View style={styles.main}>
      <Text style={styles.tt}>hi shivam</Text>

      <ActivityIndicator size="large" color="#00ff00" animating={animating} />
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  tt: {
    backgroundColor: '#fc7216',
    textAlign: 'center',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#307dcc',
  },
});
