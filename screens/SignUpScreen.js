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

export default function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          placeholder={"First Name"}
          value={firstName}
          setter={setFirstName}
        />
        <InputStyle
          placeholder={"Last Name"}
          value={lastName}
          setter={setLastName}
        />
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
        <TouchableHighlight style={styles.signUp} underlayColor="#425F57">
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
