import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { supabase } from "../lib/supabase";

//import packages
import { startAsync } from "expo-auth-session";

//import assets
import googleIcon from "../assets/images/google-button.png";

const GoogleButton = () => {
  const googleSignIn = async () => {
    const redirectUrl = "exp://192.168.1.28:19000/--/auth/callback";

    const authResponse = await startAsync({
      authUrl: `https://eijcgjlbfvtuubngtyle.supabase.co/auth/v1/authorize?provider=google&redirect_to=${redirectUrl}`,
      returnUrl: redirectUrl,
    });

    if (authResponse.type === "success") {
      supabase.auth.setSession({
        access_token: authResponse.params.access_token,
        refresh_token: authResponse.params.refresh_token,
      });
    }
  };

  return (
    <TouchableOpacity
      style={styles.googleBtn}
      onPress={() => {
        googleSignIn();
      }}
    >
      <View style={styles.googleIconWrapper}>
        <Image source={googleIcon} style={styles.googleIcon} />
      </View>
      <Text style={styles.btnText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  googleBtn: {
    marginTop: 20,
    width: "70%",
    height: 45,
    backgroundColor: "#4285f4",
    borderRadius: 10,
  },
  googleIconWrapper: {
    position: "absolute",
    width: 45,
    height: 45,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
  btnText: {
    flex: 1,
    textAlign: "right",
    marginRight: 55,
    marginTop: 13,
    color: "#fff",
    fontSize: 14,
    letterSpacing: 0.2,
    fontWeight: "bold",
  },
});

export default GoogleButton;
