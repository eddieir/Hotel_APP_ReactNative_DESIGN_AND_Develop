import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { gs, colors } from '../../../styles';
export default function Photos() {
  const photos = [
    require("../../../assets/img1.jpg"),
    require("../../../assets/img2.jpeg"),
    require("../../../assets/img3.jpg"),
    require("../../../assets/img4.jpg"),
    require("../../../assets/img5.jpg"),
    require("../../../assets/img6.jpg"),
    require("../../../assets/img7.jpg"),
    require("../../../assets/img8.jpg"),
  ]
  return (
    <View style={[gs.sectionContainer, { marginTop: 8 }]}>
      <Text style={gs.sectionTitle}>My photos</Text>

      <View style={styles.photosContainer}>
        {photos.map((photo, index) => {
          return (
            <Image source={photo} key={index} style={[styles.photo, { marginRight: (index + 1) % 3 === 0 ? 0 : 12 }]} />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  photo: {

  },
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
  },
  photo: {
    width: 108,
    height: 108,
    marginBottom: 12,
    borderRadius: 8
  }
})
