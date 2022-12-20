import React, {useState, useEffect} from 'react';
import {Image, View, StyleSheet, ActivityIndicator} from 'react-native';
import {FlipInEasyX} from 'react-native-reanimated';
import {auth} from '../firebase/firebase-config';

const Splash = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      setAnimating(false);
      navigation.replace(
        auth.currentUser != null ? 'DrawerNavigatorRoutes' : 'Auth',
      );
    }, 1000);
  });
  return (
    <View style={styles.main}>
      <Image
        source={require('../Image/test.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 20}}
      />

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
