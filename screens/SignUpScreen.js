import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { supabase } from "../supabase.ts";

//import components
import InputStyle from "../components/InputStyle";

export default function SignUpScreen({ navigation }) {
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    if (password === confirmPassword) {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        // first_name: firstname,
        // last_name: lastname,
        email: email,
        password: password,
      });
    }

    console.log("data infos", firstname, lastname, email, password);

    if (error) Alert.alert(error.message);
    setLoading(false);
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

        {/* <InputStyle
          placeholder={"First Name"}
          value={firstname}
          setter={setFirstname}
        />
        <InputStyle
          placeholder={"Last Name"}
          value={lastname}
          setter={setLastname}
        /> */}
        <InputStyle placeholder={"Email"} value={email} setter={setEmail} />
        <InputStyle
          placeholder={"Password"}
          value={password}
          setter={setPassword}
          secureTextEntry={true}
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
            navigation.navigate("Account");
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
    color: "#749F82",
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

// import React, { useState } from "react";
// import { Alert, StyleSheet, View } from "react-native";
// import { supabase } from "../supabase";
// import { Button, Input } from "react-native-elements";

// export default function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function signInWithEmail() {
//     setLoading(true);
//     const { error } = await supabase.auth.signInWithPassword({
//       email: email,
//       password: password,
//     });

//     if (error) Alert.alert(error.message);
//     setLoading(false);
//   }

//   async function signUpWithEmail() {
//     setLoading(true);
//     const { error } = await supabase.auth.signUp({
//       email: email,
//       password: password,
//     });

//     if (error) Alert.alert(error.message);
//     setLoading(false);
//   }

//   return (
//     <View style={styles.container}>
//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Input
//           label="Email"
//           leftIcon={{ type: "font-awesome", name: "envelope" }}
//           onChangeText={(text) => setEmail(text)}
//           value={email}
//           placeholder="email@address.com"
//           autoCapitalize={"none"}
//         />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <Input
//           label="Password"
//           leftIcon={{ type: "font-awesome", name: "lock" }}
//           onChangeText={(text) => setPassword(text)}
//           value={password}
//           secureTextEntry={true}
//           placeholder="Password"
//           autoCapitalize={"none"}
//         />
//       </View>
//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Button
//           title="Sign in"
//           disabled={loading}
//           onPress={() => signInWithEmail()}
//         />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <Button
//           title="Sign up"
//           disabled={loading}
//           onPress={() => signUpWithEmail()}
//         />
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
