import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import NumberScreen from "./Screens/NumberScreen";
import Search from "./Screens/Search";
import Verify from "./Screens/Verify";
import HealthScreen from "./Screens/HealthScreen";
import Rent from "./Screens/Rent";
import Track from "./Screens/Track";
import Date from "./Screens/Date";
import MapScreen from "./Screens/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import ReservationScreen from "./Screens/ReservationScreen";
import LicenseCam from "./Screens/LicenseCam";
import ManualEntry from "./Screens/ManualEntry";
const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
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
          <Stack.Screen name="Rent" component={Rent} />
          <Stack.Screen name="Date" component={Date} />
          <Stack.Screen
            name="ReservationScreen"
            component={ReservationScreen}
          />
          <Stack.Screen name="LicenseCam" component={LicenseCam} />
          <Stack.Screen name="ManualEntry" component={ManualEntry} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
