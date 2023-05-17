import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TagIcon({
  backgroundColor,
  label,
  onPress,
  selected,
  style,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.tagIcon,
        style,
        { backgroundColor },
        selected && { backgroundColor: "gray" },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.tagText, selected && styles.selectedTagText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tagIcon: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
  },

  tagText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  selectedTagText: {
    color: "darkgray",
  },
});
