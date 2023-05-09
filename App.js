// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
import { supabase } from "./supabase";

const Stack = createNativeStackNavigator();

//import screens
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import AccountScreen from "./screens/AccountScreen";

export default function App() {
  const { session, setSession } = useState < Session | null > (null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <View>
        {session && session.user ? (
          <AccountScreen key={session.user.id} session={session} />
        ) : (
          <SignUpScreen />
        )}
      </View>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#425F57",
            },
            headerTintColor: "white",
            headerTitleStyle: "bold",
            headerStatusBarHeight: 0,
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
