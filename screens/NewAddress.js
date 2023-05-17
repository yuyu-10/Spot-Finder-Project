import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

//import components
import TagIcon from "../components/TagIcon";

//import packages
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NewAddress({
  route,
  navigation: { goBack },
  toggleModal,
}) {
  const [tagArray, setTagArray] = useState([]);
  const { data, details } = route.params;
  const statusBarHeight = Constants.statusBarHeight;

  const handleTagPress = (tag) => {
    if (tagArray.includes(tag)) {
      // Remove the tag if it's already selected
      setTagArray(tagArray.filter((t) => t !== tag));
    } else {
      // Add the tag if it's not selected
      setTagArray([...tagArray, tag]);
    }
  };

  const tagColor = {
    NightLife: "#4B0082",
    Museum: "#FF8C00",
    Restaurant: "#20B2AA",
    Cafe: "#DEB887",
    Art_Gallery: "#FFB6C1",
    Book_Store: "#FFD700",
  };

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
          <Text style={styles.tagContainer}>
            {tagArray.length > 0
              ? tagArray.map((tag, index) => {
                  return (
                    <TagIcon
                      key={index}
                      label={tag}
                      onPress={() => handleTagPress(tag)}
                      backgroundColor={tagColor[tag]}
                      style={{ marginRight: 0, marginTop: 0 }}
                    />
                  );
                })
              : "Choisissez au moins un tag..."}
          </Text>
          <View style={styles.tagIconsContainer}>
            <TagIcon
              backgroundColor={tagColor["NightLife"]}
              label="NightLife"
              onPress={() => handleTagPress("NightLife")}
              selected={tagArray.some((tag) => tag === "NightLife")}
            />
            <TagIcon
              backgroundColor={tagColor["Museum"]}
              label="Museum"
              onPress={() => handleTagPress("Museum")}
              selected={tagArray.some((tag) => tag === "Museum")}
            />

            <TagIcon
              backgroundColor={tagColor["Restaurant"]}
              label="Restaurant"
              onPress={() => handleTagPress("Restaurant")}
              selected={tagArray.some((tag) => tag === "Restaurant")}
            />
            <TagIcon
              backgroundColor={tagColor["Cafe"]}
              label="Cafe"
              onPress={() => handleTagPress("Cafe")}
              selected={tagArray.some((tag) => tag === "Cafe")}
            />
            <TagIcon
              backgroundColor={tagColor["Art_Gallery"]}
              label="Art_Gallery"
              onPress={() => handleTagPress("Art_Gallery")}
              selected={tagArray.some((tag) => tag === "Art_Gallery")}
            />
            <TagIcon
              backgroundColor={tagColor["Book_Store"]}
              label="Book_Store"
              onPress={() => handleTagPress("Book_Store")}
              selected={tagArray.some((tag) => tag === "Book_Store")}
            />
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
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  tagText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
