import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gs, colors } from '../../../styles';

const hotel = {
  name: 'Hotel Nacional de Cuba',
  price: '$967',
  location: 'Havana,Cuba',
  about: 'With an exceptional location in the very center of the city of Havana, facing the warm waters of the Gulf of Mexico and the entrance to the Bay of the capital; with a rich and surprising history, combining: milestones; the validity of our history and national culture, have done that since its inauguration in 1930 has welcomed countless personalities of world history, culture, science, sport and politics.'
};
export default function About() {
  return (
    <View style={styles.container}>
      <Text style={gs.title}>
        {hotel.name}
      </Text>

      <Text style={styles.info}>
        {hotel.price} &#8226; {hotel.location}
      </Text>

      <View style={gs.divider} />

      <Text style={gs.sectionTitle}>
        About {hotel.name}
      </Text>
      <Text style={styles.about}>
        {hotel.about}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    backgroundColor: colors.darkBg
  },
  info: {
    color: colors.textSec,
    fontWeight: "600",
    marginTop: 4
  },
  about: {
    fontSize: 12,
    fontWeight: "100",
    color: colors.textSec,
    marginTop: 6,
    lineHeight: 25
  }
});
