import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { supabase } from "../lib/supabase";

//import components & screens
import InputStyle from "../components/InputStyle";
import Account from "./Account";

export default function SignIn({ navigation, session }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    if (email && password) {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) Alert.alert(error.message);
      setLoading(false);
    } else {
      Alert.alert("All fields are required");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (session && session.user) {
      navigation.navigate("Account", {
        id: session.user.id,
        session: session,
      });
    }
  }, [session, navigation]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: "#425F57" }}
    >
      <View style={styles.homeContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleSignUp}>Welcome back!</Text>
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
            signInWithEmail();
          }}
        >
          <Text style={styles.buttonSignUp}>Sign In</Text>
        </TouchableHighlight>
      </View>

      {/* <View>
        {session && session.user ? (
          <Account key={session.user.id} session={session} />
        ) : null}
      </View> */}
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
// } from "react-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// //import components
// import InputStyle from "../components/InputStyle";

// export default function SignInScreen({
//   navigation,
//   email,
//   setEmail,
//   password,
//   setPassword,
//   loading,
//   setLoading,
// }) {
//   async function signInWithEmail() {
//     setLoading(true);
//     const { error } = await supabase.auth.signInWithPassword({
//       email: email,
//       password: password,
//     });

//     if (error) Alert.alert(error.message);
//     setLoading(false);
//   }

//   return (
//     <KeyboardAwareScrollView
//       contentContainerStyle={{ flex: 1, backgroundColor: "#425F57" }}
//     >
//       <View style={styles.homeContent}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.titleSignIn}>Welcome back!</Text>
//         </View>
//         <InputStyle placeholder={"Email"} value={email} setter={setEmail} />
//         <InputStyle
//           placeholder={"Password"}
//           value={password}
//           setter={setPassword}
//           secureTextEntry={true}
//         />
//         <TouchableHighlight
//           style={styles.signIn}
//           underlayColor="#425F57"
//           disabled={loading}
//           onPress={() => {
//             signInWithEmail();
//             navigation.navigate("Account");
//           }}
//         >
//           <Text style={styles.buttonSignIn}>Sign In</Text>
//         </TouchableHighlight>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("SignUp");
//           }}
//         >
//           <Text style={styles.buttonAccount}>
//             Don't Have an account yet? Click here
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
//   },
//   titleContainer: {
//     marginBottom: 30,
//   },
//   titleSignIn: {
//     fontSize: 30,
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   buttonSignIn: {
//     color: "#749F82",
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   signIn: {
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
