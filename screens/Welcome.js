import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import { makeRedirectUri, startAsync } from "expo-auth-session";
import { supabase, supabaseUrl } from "../lib/supabase";
// import { supabase } from "../lib/supabase";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";

//import assets
import IconMap from "../assets/images/iconMap.png";

export default function Welcome({ navigation }) {
  const googleSignIn = async () => {
    console.log("coucou");
    // This will create a redirectUri
    // This should be the URL you added to "Redirect URLs" in Supabase URL Configuration
    // If they are different add the value of redirectUrl to your Supabase Redirect URLs
    // const redirectUrl = makeRedirectUri({
    //   path: "exp://192.168.5.149:19000/--/auth/callback",
    // });
    const redirectUrl = makeRedirectUri({
      path: "/auth/callback",
    });

    // authUrl: https://{YOUR_PROJECT_REFERENCE_ID}.supabase.co
    // returnURL: the redirectUrl you created above.
    const authResponse = await startAsync({
      authUrl: `${supabaseUrl}/auth/v1/authorize?provider=google&redirect_to=${redirectUrl}`,
      returnUrl: redirectUrl,
    });

    // If the user successfully signs in
    // we will have access to an accessToken and an refreshToken
    // and then we'll use setSession (https://supabase.com/docs/reference/javascript/auth-setsession)
    // to create a Supabase-session using these token
    if (authResponse.type === "success") {
      supabase.auth.setSession({
        access_token: authResponse.params.access_token,
        refresh_token: authResponse.params.refresh_token,
      });
    }
  };

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
      <TouchableHighlight
        style={styles.buttonIn}
        onPress={() => {
          googleSignIn();
        }}
        underlayColor="#42855B"
      >
        <Text style={styles.buttonSignIn}>Sign in with Google</Text>
      </TouchableHighlight>
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
