import React from "react";
import { StyleSheet, View, Text } from "react-native";

const List = ({ addresses }) => {
  return (
    <View style={[styles.container, { backgroundColor: "#425F57" }]}>
      {addresses ? (
        addresses.map((address) => (
          <View key={address.id} style={styles.addressContainer}>
            <Text style={styles.name}>{address.name}</Text>
            <Text style={styles.postalAddress}>{address.postal_address}</Text>
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
    marginBottom: 16,
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
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CFFF8D",
  },
});

export default List;
