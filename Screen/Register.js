import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default function Register() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.register}>
        <Text style={{color: 'pink'}}>Register</Text>
        <TextInput
          placeholder="Enter Name"
          placeholderTextColor="white"
          underlineColorAndroid="#f000"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="white"
          underlineColorAndroid="#f000"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Enter Age"
          placeholderTextColor="white"
          underlineColorAndroid="#f000"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Enter Address"
          placeholderTextColor="white"
          underlineColorAndroid="#f000"
          style={styles.textInput}
        />
        <TouchableOpacity activeOpacity={0.5} style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#307ecc',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    width: '80%',
  },
  textInput: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    height: 35,
    margin: 10,
    borderRadius: 15,
    paddingLeft: 15,
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#7de24e',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
