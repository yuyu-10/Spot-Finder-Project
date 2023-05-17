import { View, Text, StyleSheet } from "react-native";

export default function TagIcon({ backgroundColor, label }) {
  return (
    <View style={[styles.tagIcon, { backgroundColor }]}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tagIcon: {
    backgroundColor: "purple",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexShrink: 1,
    alignSelf: "flex-start",
    marginRight: 10,
    marginTop: 10,
  },
  tagText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
