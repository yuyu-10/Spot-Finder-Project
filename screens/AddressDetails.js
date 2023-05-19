import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AddressDetails({ route, profile }) {
  const { selectedAddressDetails } = route.params;
  console.log(selectedAddressDetails);

  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View>
        {profile && (
          <Text style={styles.headerContainer}>
            Welcome, {`${profile[0].first_name} ${profile[0].last_name} `}!
          </Text>
        )}
      </View>
      <View style={styles.addressDetailsContainer}>
        <View style={styles.addressTitleContainer}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {selectedAddressDetails.name}
          </Text>
        </View>
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
        <View style={styles.addressInfosContainer}>
          <Text
            style={styles.postalAddress}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {selectedAddressDetails.postal_address}
          </Text>
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
            <TextInput>Add a review ...</TextInput>
          </View>
        </View>
      </View>
    </View>
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
    paddingBottom: 20,
    backgroundColor: "#749F82",
    paddingTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CFFF8D",
  },
  imageContainer: {
    flex: 2,
    backgroundColor: "#749F82",
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
    height: 50,
    borderWidth: 2,
    justifyContent: "center",
    paddingLeft: 5,
  },
});
