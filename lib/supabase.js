import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const AsyncStorageAdapter = {
  getItem: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? value : null;
    } catch (error) {
      console.error("Error retrieving item from AsyncStorage:", error);
      return null;
    }
  },
  setItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error("Error setting item in AsyncStorage:", error);
    }
  },
  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing item from AsyncStorage:", error);
    }
  },
};

const supabaseUrl = "https://eijcgjlbfvtuubngtyle.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpamNnamxiZnZ0dXVibmd0eWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2MzcxOTAsImV4cCI6MTk5OTIxMzE5MH0.i7bgkTEDRx5HPfzW1P_TD2-4wWbqqDDVNcbJZ8zHDps";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorageAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
