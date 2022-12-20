/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  FlatList,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const Card = ({shop}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
        padding: 10,
      }}>
      <View>
        <View style={{flexDirection: 'row', paddingBottom: 10}}>
          <Image
            source={require('./Images/Store.png')}
            style={{width: 50, height: 50}}
          />
          <Text
            style={{
              fontSize: 35,
              color: 'blue',
              fontFamily: 'Gill Sans',
              marginLeft: 10,
            }}>
            {shop.shopname}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Image
            source={require('./Images/parson.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text
            style={{
              color: 'black',
            }}>
            {shop.name}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 10,
          borderRadius: 5,
          borderTopColor: 'black',
          borderTopWidth: 1,
          paddingTop: 3,
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            Linking.openURL(
              'whatsapp://send?text=' + 'good morning' + '&phone=91' + shop._id,
            )
          }>
          <Image
            source={require('./Images/wa.png')}
            style={{
              width: 40,
              height: 40,
              marginLeft: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL(`tel:${shop._id}`);
          }}>
          <Image
            source={require('./Images/call.png')}
            style={{
              width: 40,
              height: 40,
              marginLeft: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            Linking.openURL(
              `https://www.google.com/maps/dir/?api=1&destination=${shop.location.coordinates[0]},${shop.location.coordinates[1]}&dir_action=navigate`,
            )
          }>
          <Image
            source={require('./Images/location.png')}
            style={{
              width: 40,
              height: 40,
              marginLeft: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function List() {
  const [DATA, setData] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  Geolocation.getCurrentPosition(data => {
    setLatitude(data.coords.latitude);
    setLongitude(data.coords.longitude);
    console.warn(`latitude ${latitude} and longitude ${longitude}`);
  });
  useEffect(() => {
    console.log('it is a lIstpage');
    if (latitude && longitude) {
      console.log(latitude);
      fetch('http://172.16.140.71:3000/stores', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lat: latitude,
          lon: longitude,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          // write code to handle response data received from fetch API
          setData(responseJson);
        })
        .catch(error =>
          // write code to handle error condition
          console.log('hi'),
        );
    }
  }, [latitude, longitude]);
  const renderItem = ({item}) => <Card shop={item} />;
  return (
    <View style={{backgroundColor: '#faad14', height: '100%'}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
}
