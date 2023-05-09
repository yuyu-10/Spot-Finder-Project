import * as SecureStore from "expo-secure-store";
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'


const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = "https://eijcgjlbfvtuubngtyle.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpamNnamxiZnZ0dXVibmd0eWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2MzcxOTAsImV4cCI6MTk5OTIxMzE5MH0.i7bgkTEDRx5HPfzW1P_TD2-4wWbqqDDVNcbJZ8zHDps";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})