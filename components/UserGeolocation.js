import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
export default function UserGeolocation({ coords, setCoords }) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const askPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        const obj = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setCoords(obj);
      } else {
        setError(true);
      }
      setIsLoading(false);
    };
    console.log(coords);
    askPermission();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Chargement...</Text>
      ) : error ? (
        <Text>Permission refusée</Text>
      ) : (
        <>
          <Text>Latitude de l'utilisateur : {coords.latitude}</Text>
          <Text>Longitude de l'utilisateur : {coords.longitude}</Text>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
