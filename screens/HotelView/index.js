import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { colors } from '../../styles';;
import Header from '../HotelView/components/Header';
import BookMark from '../HotelView/components/BookMark';
import About from '../HotelView/components/About';
import Stats from '../HotelView/components/Stats';
import Amenities from './components/Amenities';
import Address from './components/Address';
import Extra from './components/Extra';
export default function index() {
  return (
    <View styles={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View>
        <BookMark />
        <About />
        <Stats />
        <Amenities />
        <Address />
        <Extra />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  }
});
