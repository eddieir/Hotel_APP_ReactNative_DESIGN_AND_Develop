import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { gs, colors } from '../../../styles';
export default function Stats() {

  return (
    <View style={styles.container}>
      <Text> stats </Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})