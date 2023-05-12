import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  StyleSheet,
  View,
  Alert,
  TouchableHighlight,
  Text,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Home({ profile }) {
  const markers = [
    {
      id: 1,
      latitude: 48.8564449,
      longitude: 2.4002913,
      title: "Le Reacteur",
      description: "La formation des champion·ne·s !",
    },
  ];
  return (
    <>
      <View style={styles.container}>
        {profile && (
          <>
            <Text>
              Welcome, {`${profile[0].first_name} ${profile[0].last_name} `}!
            </Text>

            <MapView style={styles.map}>
              {markers.map((marker) => {
                return (
                  <Marker
                    key={marker.id}
                    coordinate={{
                      latitude: marker.latitude,
                      longitude: marker.longitude,
                    }}
                    title={marker.title}
                    description={marker.description}
                    // image={require("../assets/images/marker.png")}
                  >
                    <Ionicons name="location" size={30} color="#425F57" />
                  </Marker>
                );
              })}
            </MapView>
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
