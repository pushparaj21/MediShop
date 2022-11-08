import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.loginSection}>
        <Text style={style.commonText}>Login</Text>
        <TextInput
          placeholder="plese enter your name"
          placeholderTextColor="white"
          underlineColorAndroid="#f000"
          style={style.textinput}
        />
        <TextInput
          placeholder="enter your password"
          placeholderTextColor="white"
          underlineColorAndroid="#f000"
          style={style.textinput}
        />

        <TouchableOpacity activeOpacity={0.5} style={style.button}>
          <Text style={style.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={style.registerTextStyle}>New Here ? Register</Text>
      </View>
    </View>
  );
};
export default Login;
const style = StyleSheet.create({
  commonText: {
    padding: 25,
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
  mainContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#307dcb',
  },
  loginSection: {
    width: '80%',
  },
  textinput: {
    borderRadius: 15,
    borderWidth: 1,
    height: 37,
    margin: 5,
    borderColor: 'white',
    marginTop: 10,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: '#7ce14e',
    height: 35,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
});
