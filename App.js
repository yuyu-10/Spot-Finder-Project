// // import { StatusBar } from "expo-status-bar";
import "react-native-url-polyfill/auto";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import { Buffer } from "buffer";

global.Buffer = Buffer;

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
import NewAddress from "./screens/NewAddress";

function Map({ session, profile, addresses }) {
  const Stack = createNativeStackNavigator();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home">
        {(props) => (
          <Home
            {...props}
            session={session}
            profile={profile}
            addresses={addresses}
            toggleModal={toggleModal}
            isModalVisible={isModalVisible}
          />
        )}
      </Stack.Screen>
    
      <Stack.Screen name="NewAddress">
        {(props) => (
          <NewAddress
            {...props}
            session={session}
            profile={profile}
            addresses={addresses}
            toggleModal={toggleModal}
            isModalVisible={isModalVisible}
          />
        )}
      </Stack.Screen>

          />
        )}
      </Stack.Screen>
    

    </Stack.Navigator>
  );
}

export default function App() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState("");
  const [addresses, setAddresses] = useState("");

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

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (session && session.user) {
          const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id);
          if (error) {
            throw new Error(error.message);
          }
          setProfile(data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error.message);
      }
    };
    fetchProfileData();
  }, [session]);

  useEffect(() => {
    const fetchAddressData = async () => {
      try {
        let { data, error } = await supabase.from("addresses").select("*");
        if (error) {
          throw new Error(error.message);
        }

        setAddresses(data);
      } catch (error) {
        console.error("Error fetching profile data:", error.message);
      }
    };
    fetchAddressData();
  }, []);

  return (
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
          headerShown: false,
        }}
      >
        {session === null ? (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignUp">
              {(props) => <SignUp {...props} session={session} />}
            </Stack.Screen>
            <Stack.Screen name="SignIn">
              {(props) => <SignIn {...props} session={session} />}
            </Stack.Screen>
            <Stack.Screen name="Profil" component={Account} />
          </>
        ) : (
          <Stack.Screen name="MainApp">
            {(props) => (
              <Tab.Navigator
                initialRouteName="Map"
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Map") {
                      iconName = focused ? "map" : "map-outline";
                    } else if (route.name === "Discover") {
                      iconName = focused ? "search" : "search-outline";
                    } else if (route.name === "Profil") {
                      iconName = focused ? "person" : "person-outline";
                    }

                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarStyle: {
                    backgroundColor: "#425F57",
                  },
                  tabBarActiveTintColor: "#CFFF8D",
                  tabBarInactiveTintColor: "gray",
                  headerShown: false,
                })}
              >
                <Tab.Screen name="Discover" component={Discover} />

                <Tab.Screen name="Map">
                  {(props) => (
                    <Map
                      {...props}
                      session={session}
                      profile={profile}
                      addresses={addresses}
                    />
                  )}
                </Tab.Screen>

                <Tab.Screen name="Profil">
                  {(props) => <Account {...props} session={session} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
