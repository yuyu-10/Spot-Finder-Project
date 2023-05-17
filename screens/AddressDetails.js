import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

export default function AddressDetails({ route, profile }) {
  const { selectedAddressDetails } = route.params;
  console.log(selectedAddressDetails);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.detailsContainer}>
          <Image
            source={require("../assets/images/le_chateaubriand.jpeg")}
            style={styles.image}
          />
          <Text style={styles.textContainer}>
            {selectedAddressDetails.name}
          </Text>
          <Text style={styles.textContainer}>
            {selectedAddressDetails.postal_address}
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#425F57",
  },
  image: {
    width: "100%",
    // height: 40,
  },
  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  textContainer: {
    color: "blue",
  },
});
