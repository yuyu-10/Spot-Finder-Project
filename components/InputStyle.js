import { StyleSheet, TextInput } from "react-native";

export default function InputStyle({
  placeholder,
  value,
  setter,
  secureTextEntry,
  disabled,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.inputStyle, disabled ? styles.disableInput : null]}
      placeholderTextColor="#425F57"
      value={value}
      secureTextEntry={secureTextEntry}
      fontSize={16}
      onChangeText={(text) => {
        setter(text);
      }}
      editable={!disabled}
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
    backgroundColor: "#2E3E39",
    paddingHorizontal: 20,
    color: "white",
  },
  disableInput: {
    backgroundColor: "#2E3E39",
    color: "#749F82",
  },
});
