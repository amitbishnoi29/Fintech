import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen name="home" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    borderTopWidth: 0,
  },
});
