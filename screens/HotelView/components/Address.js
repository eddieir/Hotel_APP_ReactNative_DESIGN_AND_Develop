import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { gs, colors } from '../../../styles';
export default function Address() {
  return (
    <View >
      <View style={{ backgroundColor: "#000" }}>
        <Image source={require('../../../assets/map2.png')} style={{ height: 300, width: 500, opacity: 0.2 }} />

      </View>
      <View style={styles.addressContainer}>

        <Image source={require('../../../assets/Drawing-Pin-PNG-Image-File.png')} style={{ width: 64, height: 64 }} />

        <View style={{ marginLeft: 8, marginTop: 24 }}>
          <Text style={gs.sectionTitle}>
            Address
          </Text>
          <Text style={styles.address}>
            {`Calle 21 y O, Vedado, Plaza La Habana, 10400,\n Cuba`}
          </Text>

          <View>
            <TouchableOpacity style={styles.checkButton}>
              <Text style={gs.smallText}>Check it</Text>
              <Entypo name="chevron-right" size={12} color="#fff" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addressContainer: {
    ...gs.absoluteFull,
    flexDirection: 'row',
    paddingHorizontal: 5,
    //paddingVertical: 5
  },
  address: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 6,
    letterSpacing: 1,
    lineHeight: 20
  },
  checkButton: {
    ...gs.button,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    flexDirection: "row"
  }
});
