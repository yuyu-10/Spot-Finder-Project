import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";

const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = "https://eijcgjlbfvtuubngtyle.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpamNnamxiZnZ0dXVibmd0eWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2MzcxOTAsImV4cCI6MTk5OTIxMzE5MH0.i7bgkTEDRx5HPfzW1P_TD2-4wWbqqDDVNcbJZ8zHDps";
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// const LimitedSecureStoreAdapter = {
//   getItem: async (key) => {
//     const item = await SecureStore.getItemAsync(key);
//     return item ? JSON.parse(item) : null;
//   },
//   setItem: async (key, value) => {
//     const session = JSON.parse(value);
//     const newSession = {
//       user: {
//         id: session.user.id,
//         email: session.user.email,
//         // Add any additional fields you need here, e.g.,
//         app_metadata: session.user.app_metadata,
//         user_metadata: session.user.user_metadata,
//       },
//       access_token: session.access_token,
//       refresh_token: session.refresh_token,
//       // Add any additional fields you need here, e.g.,
//       expires_in: session.expires_in,
//       token_type: session.token_type,
//     };
//     await SecureStore.setItemAsync(key, JSON.stringify(newSession));
//   },
//   removeItem: (key) => {
//     SecureStore.deleteItemAsync(key);
//   },
// };

// const supabaseUrl = "https://eijcgjlbfvtuubngtyle.supabase.co";
// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpamNnamxiZnZ0dXVibmd0eWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2MzcxOTAsImV4cCI6MTk5OTIxMzE5MH0.i7bgkTEDRx5HPfzW1P_TD2-4wWbqqDDVNcbJZ8zHDps";
// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     storage: LimitedSecureStoreAdapter,
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: false,
//   },
// });
