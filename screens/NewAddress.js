import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect } from "react";

//import packages
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NewAddress({
  route,
  navigation: { goBack },
  toggleModal,
}) {
  const { data, details } = route.params;

  // console.log("data", data);
  // console.log("details", details);
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <>
      <View style={[styles.container, { marginTop: statusBarHeight }]}>
        <TouchableOpacity
          style={styles.backHeader}
          onPress={() => {
            toggleModal();
            goBack();
          }}
        >
          <Ionicons name="arrow-back-outline" size={30} color="#CFFF8D" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>New Place</Text>
        <View style={styles.emptyHeader}></View>
      </View>
      <View>
        <Text>{data.structured_formatting.main_text}</Text>
        <Text>{details.formatted_address}</Text>
        <Text>{details.address_components[0].types}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#425F57",
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backHeader: { flex: 1 },
  textHeader: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  emptyHeader: {
    flex: 1,
  },
});
