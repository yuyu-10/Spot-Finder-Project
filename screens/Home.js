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

export default function Home({ profile }) {
  console.log(profile);
  return (
    <>
      <View style={styles.container}>
        {profile && (
          <>
            <Text>
              Welcome, {`${profile[0].first_name} ${profile[0].last_name} `}!
            </Text>
            <MapView style={styles.map} />
          </>
        )}
      </View>
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
