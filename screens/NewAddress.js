import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect } from "react";

//import components
import TagIcon from "../components/Tag";

//import packages
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NewAddress({
  route,
  navigation: { goBack },
  toggleModal,
}) {
  const { data, details } = route.params;

  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View style={{ backgroundColor: "#FFFAF0", flex: 1 }}>
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
      <View style={styles.globalContainer}>
        <View style={styles.addressContainer}>
          <View style={styles.iconPlace}>
            <Ionicons name="globe-outline" size={45} color="#425F57" />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {data.structured_formatting.main_text}
            </Text>
            <Text style={styles.textAddress}>{details.formatted_address}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.tagContainer}>Choisissez au moins un tag...</Text>
          <View style={styles.tagIconsContainer}>
            <TagIcon backgroundColor="#4B0082" label="NightLife" />
            <TagIcon backgroundColor="#FF8C00" label="Museum" />
            <TagIcon backgroundColor="#20B2AA" label="Restaurant" />
            <TagIcon backgroundColor="#DEB887" label="Cafe" />
            <TagIcon backgroundColor="#FFB6C1" label="Art Gallery" />
            <TagIcon backgroundColor="#FFD700" label="Book Store" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: { margin: 20 },
  container: {
    backgroundColor: "#749F82",
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
  iconPlace: {
    backgroundColor: "#749F82",
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: { flexDirection: "row" },
  textContainer: { marginLeft: 10 },
  textTitle: { fontSize: 18, fontWeight: "bold" },
  textAddress: { fontSize: 16 },
  tagContainer: { marginTop: 30, color: "gray" },
  tagIconsContainer: { marginTop: 30, flexDirection: "row", flexWrap: "wrap" },
  tagIcon: {
    backgroundColor: "purple",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexShrink: 1,
    alignSelf: "flex-start",
    marginRight: 10,
  },
});
