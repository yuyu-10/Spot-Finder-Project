import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";

const List = ({
  addresses,
  selectedAddress,
  setSelectedAddress,
  toggleMapVisibility,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleAddressPress = (address) => {
    setSelectedAddress(address);
    toggleMapVisibility();
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: "#515251" }]}>
      {addresses ? (
        addresses.map((address, index) => (
          <View key={address.id}>
            <View style={styles.addressContainer}>
              <TouchableOpacity onPress={() => handleImagePress(address.image)}>
                <Image
                  source={require("../assets/images/le_chateaubriand.jpeg")}
                  style={styles.image}
                />
              </TouchableOpacity>

              <View style={styles.addressTextContainer}>
                <TouchableOpacity onPress={() => handleAddressPress(address)}>
                  <Text
                    style={styles.name}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {address.name}
                  </Text>
                  <Text
                    style={styles.postalAddress}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {address.postal_address}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {index !== addresses.length - 1 && <View style={styles.line} />}
          </View>
        ))
      ) : (
        <Text style={styles.text}>No addresses found.</Text>
      )}

      <Modal visible={selectedImage !== null} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Image
            source={require("../assets/images/le_chateaubriand.jpeg")}
            style={styles.modalImage}
          />
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 84,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#425F57",
    borderBottom: 1,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  addressTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CFFF8D",
    marginBottom: 8,
  },
  postalAddress: {
    fontSize: 16,
    color: "#CFFF8D",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CFFF8D",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 3,
    borderColor: "#353635",
    borderWidth: 0.8,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#353635",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalImage: {
    width: 400,
    height: 400,
    resizeMode: "contain",
    borderRadius: 3,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#CFFF8D",
    borderRadius: 3,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#425F57",
    textAlign: "center",
  },
});

export default List;
