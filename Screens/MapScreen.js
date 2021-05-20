import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import HomeScreen from "./HomeScreen";
import Search from "./Search";
import Rent from "./Rent";
const Tab = createBottomTabNavigator();

export default function MapScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          showLabel: false,
          tabBarIcon: ({ tintColor }) => (
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/mag.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="rent"
        component={Rent}
        options={{
          showLabel: false,
          tabBarIcon: ({ tintColor }) => (
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/key.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
