import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from "react-native";

export default function InputStyle({
  placeholder,
  value,
  setter,
  secureTextEntry,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.inputStyle}
      placeholderTextColor="#425F57"
      value={value}
      secureTextEntry={secureTextEntry}
      fontSize={16}
      onChangeText={(text) => {
        setter(text);
      }}
    />
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 20,
    height: 60,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#749F82",
    paddingHorizontal: 20,
    color: "white",
  },
});
