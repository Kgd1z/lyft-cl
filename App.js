import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import NumberScreen from "./Screens/NumberScreen";
import Verify from "./Screens/Verify";
import HealthScreen from "./Screens/HealthScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <NumberScreen /> */}
      {/* <Verify /> */}
      <HealthScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
