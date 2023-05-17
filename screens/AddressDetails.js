import React from "react";
import { View, Text } from "react-native";

export default function AddressDetails({ route }) {
  const { selectedAddressDetails } = route.params;
  console.log(selectedAddressDetails);

  return (
    <>
      <View>
        <Text>Welcome to the address page</Text>
      </View>
    </>
  );
}
