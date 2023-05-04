import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//import components
import InputStyle from "../components/InputStyle";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: "#425F57" }}
    >
      <View style={styles.homeContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleSignIn}>Welcome back!</Text>
        </View>
        <InputStyle placeholder={"Email"} value={email} setter={setEmail} />
        <InputStyle
          placeholder={"Password"}
          value={password}
          setter={setPassword}
          secureTextEntry={true}
        />
        <TouchableHighlight style={styles.signIn} underlayColor="#425F57">
          <Text style={styles.buttonSignIn}>Sign In</Text>
        </TouchableHighlight>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonAccount}>
            Don't Have an account yet? Click here
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
  },
  titleContainer: {
    marginBottom: 30,
  },
  titleSignIn: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonSignIn: {
    color: "#749F82",
    fontWeight: "bold",
    fontSize: 20,
  },
  signIn: {
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
