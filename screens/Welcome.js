import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";

//import assets
import IconMap from "../assets/images/iconMap.png";
import GoogleButton from "../components/GoogleButton";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Image source={IconMap} style={styles.logo} />
      <Text style={styles.titleHome}>Spot Finder</Text>
      <Text style={styles.baseline}>Spot the best places in town</Text>

      <TouchableHighlight
        style={styles.buttonUp}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        underlayColor="#CFFF8D"
      >
        <Text style={styles.buttonSignUp}>Sign Up</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.buttonIn}
        onPress={() => {
          navigation.navigate("SignIn");
        }}
        underlayColor="#42855B"
      >
        <Text style={styles.buttonSignIn}>Sign In</Text>
      </TouchableHighlight>
      <GoogleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#425F57",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  titleHome: {
    color: "#CFFF8D",
    fontSize: 30,
    fontWeight: "bold",
  },
  baseline: {
    color: "#CFFF8D",
    marginTop: 5,
    fontSize: 15,
  },
  buttonSignIn: {
    color: "#425F57",
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonIn: {
    backgroundColor: "#749F82",
    height: 45,
    width: "70%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSignUp: {
    color: "#425F57",
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonUp: {
    marginTop: 50,
    margin: 20,
    backgroundColor: "#A8E890",
    height: 45,
    width: "70%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButton: {
    marginTop: 50,
    margin: 20,
    backgroundColor: "#A8E890",
    height: 45,
    width: "70%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
