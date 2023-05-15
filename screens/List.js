import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const List = ({ addresses }) => {
  return (
    <View style={[styles.container, { backgroundColor: "#425F57" }]}>
      {addresses ? (
        addresses.map((address) => (
          <View key={address.id} style={styles.addressContainer}>
            <Image
              source={require("../assets/images/le_chateaubriand.jpeg")}
              style={styles.image}
            />
            <View style={styles.addressTextContainer}>
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {address.name}
              </Text>
              <Text
                style={styles.postalAddress}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {address.postal_address}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.text}>No addresses found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#425F57",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  addressTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CFFF8D",
    marginBottom: 8,
  },
  postalAddress: {
    fontSize: 16,
    color: "#CFFF8D",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CFFF8D",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 20,
    borderColor: "#CFFF8D",
    borderWidth: 1,
  },
});

export default List;
