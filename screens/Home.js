import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  StyleSheet,
  View,
  Alert,
  TouchableHighlight,
  Text,
} from "react-native";
import MapView from "react-native-maps";

export default function Home({ navigation }) {
  async function handleSignOut() {
    try {
      await supabase.auth.signOut();
      navigation.navigate("Welcome");
    } catch (error) {
      Alert.alert(error.message);
    }
  }
  return (
    <>
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>

      <TouchableHighlight
        style={styles.signOut}
        underlayColor="#425F57"
        onPress={handleSignOut}
      >
        <Text style={styles.buttonSignOut}>Sign Out</Text>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
