import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import NumberScreen from "./Screens/NumberScreen";
import Search from "./Screens/Search";
import Verify from "./Screens/Verify";
import HealthScreen from "./Screens/HealthScreen";
import Track from "./Screens/Track";
import MapScreen from "./Screens/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="auto" />}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="NumberScreen" component={NumberScreen} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="HealthScreen" component={HealthScreen} />
          <Stack.Screen name="Track" component={Track} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
