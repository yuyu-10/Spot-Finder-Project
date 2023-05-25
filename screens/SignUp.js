import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from "react-native";
import { supabase } from "../lib/supabase";

//import packages
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//import components & screen
import InputStyle from "../components/InputStyle";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    if (email && password) {
      if (password === confirmPassword) {
        setLoading(true);

        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              first_name: firstname,
              last_name: lastname,
            },
          },
        });
        navigation.navigate("SignIn");

        if (error) Alert.alert(error.message);
        setLoading(false);
      } else {
        Alert.alert("Password and confirm password do not match");
      }
    } else {
      Alert.alert("All fields are required");
      setLoading(false);
    }
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: "#425F57" }}
    >
      <View style={styles.homeContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleSignUp}>Welcome</Text>
          <Text style={styles.titleSignUp}>to Spot Finder</Text>
        </View>

        <InputStyle
          setter={setEmail}
          value={email}
          placeholder="email@address.com"
        />

        <InputStyle
          setter={setFirstname}
          value={firstname}
          placeholder="First name"
        />

        <InputStyle
          setter={setLastname}
          value={lastname}
          placeholder="Last Name"
        />

        <InputStyle
          setter={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
        />

        <InputStyle
          placeholder={"Confirm Password"}
          value={confirmPassword}
          setter={setConfirmPassword}
          secureTextEntry={true}
        />

        <TouchableHighlight
          style={styles.signUp}
          underlayColor="#425F57"
          disabled={loading}
          onPress={() => {
            signUpWithEmail();
          }}
        >
          <Text style={styles.buttonSignUp}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.buttonAccount}>
            Already have an account? Click here
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  homeContent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#425F57",
  },
  titleContainer: {
    marginBottom: 30,
  },

  titleSignUp: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonSignUp: {
    color: "#425F57",
    fontWeight: "bold",
    fontSize: 20,
  },
  signUp: {
    backgroundColor: "#CFFF8D",
    marginBottom: 20,
    width: "80%",
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonAccount: {
    color: "white",
    fontSize: 15,
  },
});
