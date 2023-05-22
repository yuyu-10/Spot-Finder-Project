import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={30} color="#749F82" />
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 309,
//     left: 10,
//     zIndex: 1,
//     fontSize: 50,
//   },
// });

export default BackButton;
