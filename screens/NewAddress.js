import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";

//import packages
import Constants from "expo-constants";

export default function NewAddress({ route }) {
  const { data, details } = route.params;

  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View style={[styles.container, { marginTop: statusBarHeight }]}>
      <Text style={styles.textHeader}>New Place</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#425F57",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    color: "white",
  },
});
