import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
  Switch,
  Linking
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect, useState } from "react";

import BackButton from "../components/BackButton";
import TagIcon from "../components/TagIcon";

import Constants from "expo-constants";

export default function AddressDetails({
  route,
  profile,
  selectedAddress,
  toggleMapVisibility,
  toggleModal,
  navigation: { goBack },
}) {
  const { address } = route.params;
  const apiGoogle = Constants.manifest.extra.googleApiKey;
  const [isEnabled, setIsEnabled] = useState(address.addresses.tested);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const windowWidth = Dimensions.get("window").width;

  const navigation = useNavigation();

  openWebsite = (website) => {
    if (website) {
      Linking.openURL(website);
    }
  };  

  const handleAddressMapPress = (address) => {
    navigation.navigate("Home", {
      selectedAddress: selectedAddress,
    });
    toggleMapVisibility();
  };

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={20} color="#FFD700" />);
    }
    if (halfStar) {
      stars.push(
        <Ionicons key="half" name="star-half" size={20} color="#FFD700" />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons
          key={`empty_${i}`}
          name="star-outline"
          size={20}
          color="#FFD700"
        />
      );
    }
    return stars;
  };

  // console.log(address.addresses.pictures)
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
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
            {address.addresses.pictures.map((photo) => (
                <View>
                  <Image
                    key={photo}
                    source={{
                      uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo}&key=${apiGoogle}`,
                    }}
                    style={{ width: 450, height: 250 }}
                  />
                </View>
            ))}
          </ScrollView>
          <View style={styles.addressTitleContainer}>
            <View style={styles.backButtonView}>
              <TouchableOpacity
              style={styles.backHeader}
              onPress={() => {
                goBack();
              }}
            >
              <Ionicons name="arrow-back-outline" size={30} color="#425F57" />
            </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {address.addresses.name}
              </Text>
            </View>
          </View>
          <View style={styles.addressInfosContainer}>
            <View style={styles.tagContainer}>
              {address.tags.map((tag) => {
                return (
                  <TagIcon
                    key={tag.id}
                    backgroundColor={tag.color}
                    label={tag.name}
                  />
                );
              })}
            </View>
            <View style={styles.sep}></View>
            <TouchableOpacity
              onPress={() => handleAddressMapPress(selectedAddress)}
            >
              <Text
                style={styles.postalAddress}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {address.addresses.postal_address}
              </Text>
            </TouchableOpacity>
            <View style={styles.sep}></View>

            <View style={styles.phoneContainer}>
              <Text
                style={{ fontWeight: "bold", color: "#749F82", fontSize: 16, padding: 15 }}
              >
                Phone:
              </Text>
              <Text style={styles.telephone}>{address.addresses.phone}</Text>
            </View>
            <View style={styles.sep}></View>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>Rating: </Text>
            <View style={styles.starRating}>
              <Text>{renderStars(address.addresses.rating)}</Text>
            </View>
          </View>
          <View style={styles.sep}></View>

              <View style={styles.webContainer}>
                <Text style={styles.web}>webSite: </Text>
                <View style={styles.webSite}>
                  <Text onPress={() => this.openWebsite(address.addresses.website)} style={{ fontSize: 13, color: "#425F57", textAlign: 'center'}}>{address.addresses.website ? address.addresses.website : "No website"}</Text>
                </View>
            </View>
          <View style={styles.sep}></View>

          <View style={{ flexDirection: "row", alignItems: "center", padding: 15}}>
              <Switch
                trackColor={{ false: "#425F57", true: "#CFFF8D" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#425F57"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={{ marginLeft: 10 }}>
                {isEnabled ? "😍 Already tested" : "🤔 Try it"}
              </Text>
            </View>
          <View style={styles.sep}></View>

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
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#425F57",
  },
  headerContainer: {
    marginTop: 50,
    padding: 15,
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
    backgroundColor: "#749F82",
    paddingTop: 20,
    borderBottomWidth: 1,
    flexDirection: "row",
    position: "relative",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
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
  // addressInfosContainer: {
  //   height: 460,
  // },
  postalAddress: {
    fontSize: 16,
    padding: 15,
    color: "#425F57",
    textAlign: 'center',
    fontWeight: 'bold'
  },
  phoneContainer: {
    flexDirection: 'row',
  },
  telephone: {
    fontSize: 13,
    color: "#425F57",
    padding: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  rating: {
    fontSize: 16,
    color: "#749F82",
    padding: 15,
    fontWeight: 'bold'
  },
  starRating: {
    flexDirection: "row",
    padding: 15
  },
  webContainer: {
    flexDirection: 'row',
  },
  web: {
    fontWeight: "bold",
    color: "#749F82",
    fontSize: 16,
    padding: 15
  },
  webSite: {
    justifyContent: 'center',
    width: '60%'
  },
  addReviewContainer: {
    height: 70,
    justifyContent: "topCenter",
    padding: 15,
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
  tagContainer: {
    padding: 15,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  sep: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    borderWidth: 0.5,
    borderColor: "#d7d5d5",
  }
});
