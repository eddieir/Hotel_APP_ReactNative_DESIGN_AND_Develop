import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { gs, color, colors } from '../../../styles';
export default function BookMark() {
  return (
    <View style={styles.bookmark}>
      <Feather name="bookmark" size={24} color={colors.pink} />
    </View>
  );
}


const styles = StyleSheet.create({
  bookmark: {
    position: "absolute",
    width: 36,
    height: 36,
    right: 32,
    top: -46 / 2,
    backgroundColor: colors.text,
    ...gs.center,
    borderRadius: 46 / 2,
    zIndex: 10
  }
})