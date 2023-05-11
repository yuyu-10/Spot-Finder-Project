import "react-native-url-polyfill/auto";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";

const Stack = createNativeStackNavigator();

//import screens
import Welcome from "./screens/Welcome";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Account from "./screens/Account";

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

  return (
    <>
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
      </NavigationContainer>
    </>
  );
}

// // import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View } from "react-native";
// import { supabase } from "./supabase";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import "react-native-url-polyfill/auto";
// import { useState, useEffect } from "react";
// import { View } from "react-native";
// import { Session } from "@supabase/supabase-js";
// // import { AuthSessionResult } from 'expo-auth-session';

// const Stack = createNativeStackNavigator();

// //import screens
// import WelcomeScreen from "./screens/WelcomeScreen";
// import SignUpScreen from "./screens/SignUpScreen";
// import SignInScreen from "./screens/SignInScreen";
// import AccountScreen from "./screens/AccountScreen";

// export default function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: session }) => {
//       console.log("session", session);
//       setSession(session);
//     });

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });
//   }, []);

//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="Welcome"
//           screenOptions={{
//             headerStyle: {
//               backgroundColor: "#425F57",
//             },
//             headerTintColor: "white",
//             headerTitleStyle: "bold",
//             headerStatusBarHeight: 0,
//           }}
//         >
//           <Stack.Screen
//             name="Welcome"
//             component={WelcomeScreen}
//             options={{ headerShown: false }}
//           />

//           <Stack.Screen name="SignUp">
//             {(props) => (
//               <SignUpScreen
//                 {...props}
//                 email={email}
//                 setEmail={setEmail}
//                 password={password}
//                 setPassword={setPassword}
//                 confirmPassword={confirmPassword}
//                 setConfirmPassword={setConfirmPassword}
//                 loading={loading}
//                 setLoading={setLoading}
//               />
//             )}
//           </Stack.Screen>

//           <Stack.Screen name="SignIn">
//             {(props) => (
//               <SignInScreen
//                 {...props}
//                 email={email}
//                 setEmail={setEmail}
//                 password={password}
//                 setPassword={setPassword}
//                 loading={loading}
//                 setLoading={setLoading}
//               />
//             )}
//           </Stack.Screen>

//           <Stack.Screen name="Account" component={AccountScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>

//       <View>
//         {session && session.user ? (
//           <AccountScreen key={session.user.id} session={session} />
//         ) : (
//           <SignInScreen />
//         )}
//       </View>
//     </>
//   );
// }
