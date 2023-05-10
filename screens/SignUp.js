import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { supabase } from "../lib/supabase";

//import components & screen
import InputStyle from "../components/InputStyle";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    if (email && password) {
      setLoading(true);

      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      navigation.navigate("SignIn");

      if (error) Alert.alert(error.message);
      setLoading(false);
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
          // autoCapitalize={"none"}
        />

        <InputStyle
          setter={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
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

// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";

// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { supabase } from "../lib/supabase";

// //import components
// import InputStyle from "../components/InputStyle";

// export default function SignUpScreen({
//   navigation,
//   email,
//   setEmail,
//   password,
//   setPassword,
//   confirmPassword,
//   setConfirmPassword,
//   loading,
//   setLoading,
// }) {
//   // const [firstname, setFirstname] = useState("");
//   // const [lastname, setLastname] = useState("");

//   async function signUpWithEmail() {
//     if (password === confirmPassword) {
//       setLoading(true);
//       const { error } = await supabase.auth.signUp({
//         // first_name: firstname,
//         // last_name: lastname,
//         email: email,
//         password: password,
//       });

//       if (error) Alert.alert(error.message);
//       setLoading(false);
//     }
//   }

//   return (
//     <KeyboardAwareScrollView
//       contentContainerStyle={{ flex: 1, backgroundColor: "#425F57" }}
//     >
//       <View style={styles.homeContent}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.titleSignUp}>Welcome</Text>
//           <Text style={styles.titleSignUp}>to Spot Finder</Text>
//         </View>

//         {/* <InputStyle
//           placeholder={"First Name"}
//           value={firstname}
//           setter={setFirstname}
//         />
//         <InputStyle
//           placeholder={"Last Name"}
//           value={lastname}
//           setter={setLastname}
//         /> */}
//         <InputStyle placeholder={"Email"} value={email} setter={setEmail} />
//         <InputStyle
//           placeholder={"Password"}
//           value={password}
//           setter={setPassword}
//           secureTextEntry={true}
//         />
//         <InputStyle
//           placeholder={"Confirm Password"}
//           value={confirmPassword}
//           setter={setConfirmPassword}
//           secureTextEntry={true}
//         />
//         <TouchableHighlight
//           style={styles.signUp}
//           underlayColor="#425F57"
//           disabled={loading}
//           onPress={() => {
//             signUpWithEmail();
//             navigation.navigate("SignIn");
//           }}
//         >
//           <Text style={styles.buttonSignUp}>Sign Up</Text>
//         </TouchableHighlight>

//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("SignIn");
//           }}
//         >
//           <Text style={styles.buttonAccount}>
//             Already have an account? Click here
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   homeContent: {
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//     backgroundColor: "#425F57",
//   },
//   titleContainer: {
//     marginBottom: 30,
//   },

//   titleSignUp: {
//     fontSize: 30,
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   buttonSignUp: {
//     color: "#749F82",
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   signUp: {
//     backgroundColor: "#CFFF8D",
//     marginBottom: 20,
//     width: "80%",
//     height: 60,
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonAccount: {
//     color: "white",
//     fontSize: 15,
//   },
// });
