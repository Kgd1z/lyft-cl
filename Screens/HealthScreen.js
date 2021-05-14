import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Requirement from "../Components/Requirement";

export default function HealthScreen() {
  return (
    <View
      style={{ flex: 1, alignItems: "center", marginLeft: 10, marginRight: 10 }}
    >
      <Image
        style={{ width: 330, height: 200, marginTop: 30 }}
        source={require("../assets/health.png")}
      />
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "#012d3f",
            paddingTop: 50,
            paddingBottom: 10,
          }}
        >
          Health safety commitment
        </Text>
        <Text style={{ fontSize: 16 }}>
          To ride with Lyft, you agree to follow CDC and local requirements:
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 22,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#012d3f" }}>
            View CDC requirements
          </Text>
          <Image
            style={{ width: 16, height: 16, marginLeft: 10 }}
            source={require("../assets/rightarr.png")}
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <Requirement title="Dont ride if you have covid 19" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
