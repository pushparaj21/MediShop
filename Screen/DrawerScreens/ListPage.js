/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  FlatList,
} from 'react-native';
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
const DATA = [
  {
    _id: 8840587225,
    name: 'test',
    shopname: 'medistore sai',
    location: {type: 'Point', coordinates: [24.6344203, 83.0844243]},
    __v: 0,
  },
  {
    _id: 76544678244412,
    name: 'testhhhuuyhhj',
    shopname: 'ppoi',
    location: {type: 'Point', coordinates: [24.6344203, 83.0844243]},
    __v: 0,
  },
  {
    _id: 765446782444125600,
    name: 'testhhhuuyhhj',
    shopname: 'ppoi',
    location: {type: 'Point', coordinates: [24.6344105, 83.0844465]},
    __v: 0,
  },
  {
    _id: 9090909077,
    name: 'opooo',
    shopname: 'poii',
    location: {type: 'Point', coordinates: [24.6344105, 83.0844465]},
    __v: 0,
  },
  {
    _id: 88,
    name: 'ooooooo',
    shopname: 'uuuu',
    location: {type: 'Point', coordinates: [24.6344338, 83.084402]},
    __v: 0,
  },
  {
    _id: 77,
    name: 'ooooooo',
    shopname: 'uuuu',
    location: {type: 'Point', coordinates: [24.6344338, 83.084402]},
    __v: 0,
  },
];

export default function List() {
  const renderItem = ({item}) => <Card shop={item} />;
  return (
    <View style={{backgroundColor: '#faad14', height: '100%'}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
