import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const Login = () => {
  return (
    <View style={style.mainContainer}>
      <View>
        <Text style={style.commonText}>Login</Text>
        <TextInput placeholder="enter your name" style={style.tt}>
          name
        </TextInput>
        <TextInput
          placeholder="enter your password"
          style={style.tt}></TextInput>
        <Button title="submit"></Button>
      </View>
    </View>
  );
};
export default Login;
const style = StyleSheet.create({
  commonText: {
    padding: 25,
  },
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tt: {
    backgroundColor: 'red',
  },
});
