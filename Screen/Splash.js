import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      setAnimating(false);
      try {
        const value = await AsyncStorage.getItem('userid');
        navigation.replace(value != null ? 'Auth' : 'DrawerNavigatorRoutes');
      } catch (e) {
        console.log(e);
      }
    }, 5000);
  });
  return (
    <View>
      <Text style={styles.tt}>hi shivam</Text>

      <ActivityIndicator size="large" color="#00ff00" animating={animating} />
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  tt: {
    backgroundColor: '#fc7216',
  },
});
