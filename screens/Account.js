import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  StyleSheet,
  View,
  Alert,
  TouchableHighlight,
  Text,
} from "react-native";

import InputStyle from "../components/InputStyle";

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [avatarUrl, setAvatarUrl] = useState("");

  async function handleSignOut() {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the newSession!");

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
      if (!session?.user) throw new Error("No user on the newSession!");

      const updates = {
        id: session.user.id,
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
    <View style={styles.accountContainer}>
      <InputStyle label="Email" value={session?.user?.email} disabled={true} />

      <InputStyle
        value={firstName}
        setter={setFirstName}
        placeholder="First Name"
      />

      <InputStyle
        value={lastName}
        setter={setLastName}
        placeholder="Last Name"
      />

      <TouchableHighlight
        style={styles.update}
        underlayColor="#425F57"
        disabled={loading}
        onPress={() => updateProfile({ firstName, lastName })}
      >
        <Text style={styles.buttonUpdate}>
          {loading ? "Loading ..." : "Update"}
        </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.signOut}
        underlayColor="#425F57"
        onPress={handleSignOut}
      >
        <Text style={styles.buttonSignOut}>Sign Out</Text>
      </TouchableHighlight>
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
  accountContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#425F57",
  },
  buttonUpdate: {
    color: "#425F57",
    fontWeight: "bold",
    fontSize: 20,
  },
  update: {
    backgroundColor: "#CFFF8D",
    marginBottom: 20,
    width: "80%",
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  signOut: {
    backgroundColor: "#749F82",
    marginTop: 30,
    marginBottom: 20,
    width: "80%",
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSignOut: {
    color: "#425F57",
    fontWeight: "bold",
    fontSize: 20,
  },
});
