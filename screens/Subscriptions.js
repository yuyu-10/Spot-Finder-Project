import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

import BackButton from "../components/BackButton";

export default function Subscriptions({ route }) {
  const { followersNames, followingsNames } = route.params;

  const [followersOrFollowings, setFollowersOrFollowings] = useState(null);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setFollowersOrFollowings(true);
            }}
          >
            <Text>Followers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setFollowersOrFollowings(false);
            }}
          >
            <Text>Followings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#425F57",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 300,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 30,
  },
});

{
  /* <View style={styles.follow}>
<Text style={styles.title}>Followers</Text>
{followersNames.map((name, i) => (
  <Text key={i}>{`${name[0].first_name} ${name[0].last_name}`}</Text>
))}
</View>
<View style={styles.follow}>
<Text style={styles.title}>Followings</Text>
{followingsNames.map((name, i) => (
  <Text key={i}>{`${name[0].first_name} ${name[0].last_name}`}</Text>
))}
</View> */
}
