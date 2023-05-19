import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AddressDetails({ route, profile }) {
  const { selectedAddressDetails } = route.params;
  console.log(selectedAddressDetails);

  const windowWidth = Dimensions.get("window").width;

  return (
    <>
      <View style={styles.container}>
        <View>
          {profile && (
            <Text style={styles.headerContainer}>
              Welcome, {`${profile[0].first_name} ${profile[0].last_name} `}!
            </Text>
          )}
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
        <View style={styles.addressContainer}>
          <View style={styles.addressTitleView}>
            <Text style={styles.addressTitleText}>
              {selectedAddressDetails.name}
            </Text>
          </View>
          <View style={styles.addressPostalView}>
            <Text style={styles.addressPostalText}>
              {selectedAddressDetails.postal_address}
            </Text>
          </View>
          <View style={styles.addressRatingView}>
            <Text style={styles.addressRatingText}>Rating:</Text>
            <View style={styles.starRating}>
              <Ionicons name="star" size={25} color="#f5ca20" />
              <Ionicons name="star" size={25} color="#f5ca20" />
              <Ionicons name="star" size={25} color="#f5ca20" />
              <Ionicons name="star" size={25} color="#f5ca20" />
              <Ionicons name="star" size={25} color="#f5ca20" />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#749F82",
  //   flex: 1,
  // },
  headerContainer: {
    marginTop: 50,
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#425F57",
    color: "#FFFAF0",
    textAlign: "center",
    fontWeight: "bold",
  },
  //   imageContainer: {
  //     marginTop: -250,
  //   },
  // ScrollViewContent: {
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  //   image: {
  //     height: 200,
  //     resizeMode: "cover",
  //   },
  // addressContainer: {
  //   marginTop: -238,
  //   flex: 1,
  //   justifyContent: "top",
  //   alignItems: "left",
  // },
  // addressTitleView: {
  //   backgroundColor: "#425F57",
  //   width: 386,
  //   height: 50,
  //   borderRadius: 10,
  //   marginBottom: 1,
  //   marginTop: 1,
  //   marginLeft: 2,
  //   marginRight: 2,
  //   alignItems: "left",
  //   justifyContent: "center",
  // },
  // addressTitleText: {
  //   color: "#CFFF8D",
  //   marginLeft: 10,
  //   fontWeight: "bold",
  //   fontSize: 20,
  // },
  // addressPostalView: {
  //   backgroundColor: "#425F57",
  //   width: "100%",
  //   height: 50,
  //   width: 386,
  //   borderRadius: 10,
  //   marginBottom: 1,
  //   marginTop: 1,
  //   marginLeft: 2,
  //   marginRight: 2,
  //   alignItems: "left",
  //   justifyContent: "center",
  // },
  // addressPostalText: {
  //   color: "#CFFF8D",
  //   marginLeft: 10,
  //   fontSize: 15,
  // },
  // addressRatingView: {
  //   backgroundColor: "#425F57",
  //   width: "100%",
  //   height: 60,
  //   width: 386,
  //   borderRadius: 10,
  //   marginBottom: 1,
  //   marginTop: 1,
  //   marginLeft: 2,
  //   marginRight: 2,
  //   alignItems: "left",
  //   justifyContent: "center",
  //   paddingBottom: 5,
  //   paddingTop: 5,
  // },
  // addressRatingText: {
  //   color: "#CFFF8D",
  //   marginLeft: 10,
  //   fontSize: 15,
  //   paddingBottom: 2,
  // },
  // starRating: {
  //   flexDirection: "row",
  //   paddingLeft: 10,
  //   paddingBottom: 2,
  // },
});
