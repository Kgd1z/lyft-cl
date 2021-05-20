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
export default function Search() {
  const navigation = useNavigation();
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: 400,
          height: 400,
        }}
      >
        {/* <Hamburger /> */}
      </MapView>

      <View
        style={{
          backgroundColor: "white",
          width: 380,
          height: 300,

          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 270,
            height: 140,
            marginTop: 20,
          }}
          source={require("../assets/search.png")}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#012d3f",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Lyft is currently unavailable
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#ae4ff2",
            width: 280,
            height: 50,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
          onPress={() => navigation.navigate()}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Try another location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
