import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Hamburger from "../Components/Hamburger";
import BottomSheett from "../Components/BottomSheett";
export default function Rent() {
  const navigation = useNavigation();
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: 400,
          height: 440,
        }}
      >
        {/* <Hamburger /> */}
      </MapView>
      <BottomSheett />
    </View>
  );
}

const styles = StyleSheet.create({});
