import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default function Register() {
  const [name, setName] = useState('');
  const [shopName, setShopName] = useState('');
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [contact, setContact] = useState();
  const registerUser = () => {
    console.log(`${latitude}  ${longitude}  ${contact}  ${name} ,${shopName}`);
    fetch('http://172.16.140.71:3000/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${name}`,
        shopname: `${shopName}`,
        _id: contact,
        lat: latitude,
        lon: longitude,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        console.log(data.msg);
        ToastAndroid.show(`${data.msg}`, ToastAndroid.SHORT);
      })
      .catch(e => console.log(e));
    console.log('the end of send');
  };
  Geolocation.getCurrentPosition(data => {
    setLatitude(data.coords.latitude);
    setLongitude(data.coords.longitude);
    console.warn(`latitude ${latitude} and longitude ${longitude}`);
  });
  // console.warn(Geolocation);
  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={ShopName => setShopName(ShopName)}
              placeholder="Enter Shop Title" //dummy@abc.com
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setName(UserName)}
              placeholder="Your Name" //12345
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              // onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              underlineColorAndroid="#f000"
              returnKeyType="next"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={Contact => setContact(Contact)}
              placeholder="Contact No" //12345
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              blurOnSubmit={false}
              secureTextEntry={false}
              underlineColorAndroid="#f000"
              returnKeyType="next"
              autoComplete="tel-national"
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={registerUser}>
            <Text style={styles.buttonTextStyle}>Register Shop</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
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
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
