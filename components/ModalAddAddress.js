import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";

export default function ModalAddAddress({ isModalVisible, toggleModal }) {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          {/* Contenu de la modale */}
          <Text>Contenu de la modale</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text>Fermer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  modal: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    height: "100%",
    width: "100%",
    backgroundColor: "blue",
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
