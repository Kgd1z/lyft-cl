import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { StyleSheet, Text, View, Dimensions } from "react-native";
import HomeScreen from "./HomeScreen";
import Search from "./Search";
const Tab = createBottomTabNavigator();

export default function MapScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
