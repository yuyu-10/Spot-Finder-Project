import { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";

//import packages
import Constants from "expo-constants";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function ModalAddAddress({ isModalVisible, toggleModal }) {
  const apiGoogle = Constants.expoConfig.extra.apiGoogle;

  const [inputSearch, setInputSearch] = useState("");
  const inputSearchRef = useRef();

  const statusBarHeight = Constants.statusBarHeight;

  const navigation = useNavigation();

  useEffect(() => {
    if (isModalVisible) {
      inputSearchRef.current.focus();
    }
  }, [isModalVisible]);

  const renderCloseButton = () => {
    return (
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          setInputSearch("");
          inputSearchRef.current.clear();
        }}
      >
        <Ionicons name="close" size={30} color="#425F57" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
      >
        <View style={[styles.modalContent, { paddingTop: statusBarHeight }]}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.modalArrowBack}
            >
              <Ionicons name="arrow-back-outline" size={30} color="#425F57" />
            </TouchableOpacity>

            <SafeAreaView style={styles.modalInput}>
              <GooglePlacesAutocomplete
                value={inputSearch}
                styles={styles.googleAutocomplete}
                ref={inputSearchRef}
                listStyle={styles.listStyle}
                placeholder="Type a place"
                onPress={(data, details = null) => {
                  toggleModal();
                  navigation.navigate("NewAddress", { data, details });
                }}
                query={{
                  key: apiGoogle,
                  fields: "formatted_address,name,types", // Add types to the fields
                }}
                fetchDetails={true}
                onFail={(error) => console.log(error)}
                onNotFound={() => console.log("no results")}
                listEmptyComponent={() => (
                  <View style={{ flex: 1 }}>
                    <Text>No results were found</Text>
                  </View>
                )}
                renderRightButton={renderCloseButton}
                textInputProps={{
                  clearButtonMode: "never",
                }}
              />
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#425F57",
  },
  modalHeader: {
    width: "100%",
    backgroundColor: "#749F82",
    paddingVertical: 15,
  },
  modalInput: {
    width: "100%",
    position: "absolute",
    top: 8,
  },
  modalInputText: {
    color: "#425F57",
    backgroundColor: "#749F82",
  },
  googleAutocomplete: {
    container: {
      width: "100%",
    },
    textInputContainer: {
      paddingBottom: 20,
    },
    textInput: {
      color: "#000000",
      backgroundColor: "transparent",
      paddingHorizontal: 60,
    },
    description: {
      color: "white",
    },
    row: {
      backgroundColor: "#425F57",
      width: "90%",
      paddingVertical: 30,
    },
    poweredContainer: {
      display: "none",
    },
  },
  modalArrowBack: {
    paddingLeft: 15,
    zIndex: 10,
    width: 44,
  },
  closeButton: {
    top: 6,
    right: 15,
  },
});
