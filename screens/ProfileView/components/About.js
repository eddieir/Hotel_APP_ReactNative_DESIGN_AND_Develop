import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { gs, colors } from '../../../styles';
export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={gs.sectionTitle}> About Me </Text>
        <Text style={styles.about}>
          this person is fullstack developer with the speciality of reposnsive websites
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 32
  },
  about: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.darkHl,
    marginTop: 8,
    lineHeight: 22
  }
});