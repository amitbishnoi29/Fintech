import { useAuth } from "@clerk/clerk-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";
import * as SecureStore from "expo-secure-store";
// import { MMKV } from 'react-native-mmkv';

// const storage = new MMKV({
//   id: 'inactivty-storage',
// });

export const UserInactivityProvider = ({ children }: any) => {
  // export const UserInactivityProvider = ({ children }) => {
  const appState = useRef(AppState.currentState);
  const router = useRouter();
  const { isSignedIn } = useAuth();
  console.log("is Signed In ", isSignedIn);
  
  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, []);

  async function save() {
    try {
      await SecureStore.setItemAsync("start", Date.now().toString());
    } catch (error) {
      console.log(error);
    }
  }

  async function getValueFor() {
    let result = await SecureStore.getItemAsync("start");
    if (result) {
      return parseInt(result);
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert("No values stored under that key.");
    }
  }

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("start", Date.now().toString());
    } catch (e) {
      // saving error
      console.log("Error saving state");
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("start");
      if (value !== null) {
        // value previously stored
        return parseInt(value);
      }
    } catch (e) {
      // error reading value
      console.log("Error getting state");
    }
  };

  const handleAppStateChange = async (nextAppState: AppStateStatus) => {
    // const handleAppStateChange = async (nextAppState) => {
    console.log(
      "🚀 ~ handleAppStateChange ~ nextAppState",
      appState,
      nextAppState
    );

    if (nextAppState === "background") {
      recordStartTime();
      // save()
    } else if (
      nextAppState === "active" &&
      appState.current.match(/background/)
    ) {
      const startTime = (await getData()) || 0;
      // const startTime =  await getValueFor() || 0;
      const elapsed = Date.now() - startTime;
      console.log("🚀 ~ handleAppStateChange ~ elapsed:", elapsed);

      if (elapsed > 30000 && isSignedIn) {
        console.log("Time Elapsed");
        router.replace("/(app)/(modals)/lock");
      }
    }
    appState.current = nextAppState;
  };

  const recordStartTime = async () => {
    await storeData();
  };

  return children;
};
