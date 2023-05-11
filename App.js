// // import { StatusBar } from "expo-status-bar";
import "react-native-url-polyfill/auto";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Ionicons from "react-native-vector-icons/Ionicons";

//import screens
import Welcome from "./screens/Welcome";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Account from "./screens/Account";
import Home from "./screens/Home";
import Discover from "./screens/Discover";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const handleAuthStateChange = (event, session) => {
      setSession(session);
    };

    supabase.auth.onAuthStateChange(handleAuthStateChange);

    return () => {
      supabase.auth.offAuthStateChange(handleAuthStateChange);
    };
  }, []);

  console.log(session);
  return (
    <NavigationContainer>
      {session === null ? (
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
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignUp">
            {(props) => <SignUp {...props} session={session} />}
          </Stack.Screen>
          <Stack.Screen name="SignIn">
            {(props) => <SignIn {...props} session={session} />}
          </Stack.Screen>
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName="Map"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Map") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Discover") {
                iconName = focused ? "ios-list" : "ios-list-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
              backgroundColor: "#425F57",
            },
            tabBarActiveTintColor: "#CFFF8D",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Discover" component={Discover} />
          <Tab.Screen name="Map" component={Home} />
          <Tab.Screen name="Profil">
            {(props) => <Account {...props} session={session} />}
          </Tab.Screen>
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
