import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { StyleSheet, View, Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import { Session } from "@supabase/supabase-js";

export default function Account({ route, navigation }) {
  const { session, id } = route.params;
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [avatarUrl, setAvatarUrl] = useState("");

  async function handleSignOut() {
    try {
      await supabase.auth.signOut();
      navigation.navigate("SignIn");
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  //   console.log("session", session);

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`first_name, last_name`)
        .eq("id", session?.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFirstName(data.first_name);
        setLastName(data.last_name);
        // setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ firstName, lastName }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: id,
        first_name: firstName,
        last_name: lastName,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input label="Email" value={session?.user?.email} disabled />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="First Name"
          value={firstName || ""}
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Last Name"
          value={lastName || ""}
          onChangeText={(text) => setLastName(text)}
        />
      </View>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title={loading ? "Loading ..." : "Update"}
          onPress={() => updateProfile({ firstName, lastName })}
          disabled={loading}
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});

// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, Alert } from "react-native";
// import { Button, Input } from "react-native-elements";
// import { supabase } from "../lib/supabase";
// import { Session } from "@supabase/supabase-js";

// export default function AccountScreen({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   // const [avatarUrl, setAvatarUrl] = useState("");

//   useEffect(() => {
//     if (session) getProfile();
//   }, [session]);

//   async function getProfile() {
//     try {
//       setLoading(true);
//       if (!session?.user) throw new Error("No user on the session!");

//       let { data, error, status } = await supabase
//         .from("profiles")
//         .select(`first_name, last_name`)
//         .eq("id", session?.user.id)
//         .single();
//       if (error && status !== 406) {
//         throw error;
//       }

//       if (data) {
//         setFirstName(data.first_name);
//         setLastName(data.last_name);
//         // setAvatarUrl(data.avatar_url);
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         Alert.alert(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function updateProfile({ firstName, lastName }) {
//     try {
//       setLoading(true);
//       if (!session?.user) throw new Error("No user on the session!");

//       const updates = {
//         id: session?.user.id,
//         first_name: firstName,
//         last_name: lastName,
//         // avatar_url,
//         updated_at: new Date(),
//       };

//       let { error } = await supabase.from("profiles").upsert(updates);

//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         Alert.alert(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Input label="Email" value={session?.user?.email} disabled />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <Input
//           label="First Name"
//           value={firstName || ""}
//           onChangeText={(text) => setFirstName(text)}
//         />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <Input
//           label="Last Name"
//           value={lastName || ""}
//           onChangeText={(text) => setLastName(text)}
//         />
//       </View>

//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Button
//           title={loading ? "Loading ..." : "Update"}
//           onPress={() =>
//             updateProfile({ first_name: firstName, last_name: lastName })
//           }
//           disabled={loading}
//         />
//       </View>

//       <View style={styles.verticallySpaced}>
//         <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 40,
//     padding: 12,
//   },
//   verticallySpaced: {
//     paddingTop: 4,
//     paddingBottom: 4,
//     alignSelf: "stretch",
//   },
//   mt20: {
//     marginTop: 20,
//   },
// });
