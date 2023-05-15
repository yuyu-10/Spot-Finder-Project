import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const SwitchMapToList = ({ isEnabled, toggleSwitch }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.button, isEnabled && styles.buttonActive]}>
        <Text style={styles.buttonText}>{isEnabled ? "List" : "Map"}</Text>
      </View>
      <Switch
        trackColor={{ false: "#425F57", true: "#425F57" }}
        thumbColor={isEnabled ? "#CFFF8D" : "#CFFF8D"}
        ios_backgroundColor="#425F57"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 110,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  button: {
    backgroundColor: "#CFFF8D",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  buttonActive: {
    backgroundColor: "#CFFF8D",
  },
  buttonText: {
    color: "#425F57",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SwitchMapToList;
