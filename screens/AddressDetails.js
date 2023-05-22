import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import BackButton from "../components/BackButton";

export default function AddressDetails({
  route,
  profile,
  selectedAddress,
  toggleMapVisibility,
}) {
  const { address } = route.params;
  // console.log(address);

  const windowWidth = Dimensions.get("window").width;

  const navigation = useNavigation();

  const handleAddressMapPress = (address) => {
    navigation.navigate("Home", {
      selectedAddress: selectedAddress,
    });
    toggleMapVisibility();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View>
          {profile && (
            <Text style={styles.headerContainer}>
              Welcome, {`${profile[0].first_name} ${profile[0].last_name} `}!
            </Text>
          )}
        </View>
        <View style={styles.addressDetailsContainer}>
          <ScrollView
            style={styles.imageContainer}
            contentContainerStyle={styles.ScrollViewContent}
            horizontal={true}
          >
            <Image
              source={require("../assets/images/le_chateaubriand.jpeg")}
              style={[styles.image, { width: windowWidth }]}
            />
            <Image
              source={require("../assets/images/le_chateaubriand.jpeg")}
              style={[styles.image, { width: windowWidth }]}
            />
            <Image
              source={require("../assets/images/le_chateaubriand.jpeg")}
              style={[styles.image, { width: windowWidth }]}
            />
          </ScrollView>
          <View style={styles.addressTitleContainer}>
            <View style={styles.backButtonView}>
              <BackButton style={styles.backButton} />
            </View>
            <View>
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {address.name}
              </Text>
            </View>
          </View>
          <View style={styles.addressInfosContainer}>
            <TouchableOpacity
              onPress={() => handleAddressMapPress(selectedAddress)}
            >
              <Text
                style={styles.postalAddress}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {address.postal_address}
              </Text>
            </TouchableOpacity>
            <Text style={styles.openingHours}>
              Open Tue-Sat: 12h30-14h / 19h-23h
            </Text>
            <Text style={styles.rating}>Rating: </Text>
            <View style={styles.starRating}>
              <Ionicons name="star" size={25} color="#f5ca20" />
              <Ionicons name="star" size={25} color="#f5ca20" />
              <Ionicons name="star" size={25} color="#f5ca20" />
              <Ionicons name="star" size={25} color="#f5ca20" />
              <Ionicons name="star" size={25} color="#f5ca20" />
            </View>
            <View style={styles.addReviewContainer}>
              <TextInput
                style={styles.input}
                placeholder="Add a review ..."
                placeholderTextColor="#9e9e9e"
              ></TextInput>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#425F57",
  },
  headerContainer: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#425F57",
    color: "#FFFAF0",
    textAlign: "center",
    fontWeight: "bold",
  },
  addressDetailsContainer: {
    backgroundColor: "#FFFAF0",
    flex: 1,
  },
  addressTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    backgroundColor: "#FFF9DE",
    paddingTop: 20,
    borderBottomWidth: 1,
    flexDirection: "row",
    position: "relative",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#425F57",
  },
  imageContainer: {
    flex: 2,
    backgroundColor: "black",
    paddingTop: 2,
  },
  image: {
    height: 202,
    resizeMode: "cover",
    borderRadius: 3,
    marginLeft: 1,
    marginRight: 1,
  },
  addressInfosContainer: {
    flex: 2,
  },
  postalAddress: {
    fontSize: 16,
    color: "#425F57",
    marginBottom: 8,
    marginTop: 15,
    paddingLeft: 5,
  },
  openingHours: {
    fontSize: 13,
    color: "#425F57",
    marginBottom: 20,
    paddingLeft: 5,
  },
  rating: {
    fontSize: 16,
    color: "#425F57",
    marginBottom: 5,
    paddingLeft: 5,
  },
  starRating: {
    flexDirection: "row",
    paddingLeft: 5,
    marginBottom: 15,
  },
  addReviewContainer: {
    height: 70,

    justifyContent: "topCenter",
    padding: 10,
  },
  input: {
    color: "#425F57",
  },
  backButtonView: {
    left: 10,
    position: "absolute",
  },
  backButton: {
    padding: 10,
    zIndex: 1,
  },
});
