import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { gs, colors } from '../../../styles';
export default function Extra() {
  const extras = [
    "Payment at Checkout",
    "WIFI network is off by 12:00pm",
    "No swimming after 10:00ppm",
    "No more than 2 bags of luggage",
    "No singing while showering :D",
    "No Refunds"
  ];
  return (
    <View style={styles.container}>
      <Text style={gs.sectionContainer}>Before you go</Text>
      <View style={styles.list}>
        {extras.map((extra, key) => {
          return <Text style={styles.listItem} key={key}>&mdash;{extra}</Text>
        })}
      </View>

      <View style={{ marginTop: 32, marginBottom: -40 }}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={{ fontWeight: "700", color: "#fff" }}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    marginTop: 8,
    marginBottom: 64
  },
  list: {
    marginTop: 16,
    marginLeft: 8
  },
  listItem: {
    color: colors.textSec,
    marginVertical: 8
  },
  filterButton: {
    ...gs.button,
    paddingVertical: 18
  }
});
