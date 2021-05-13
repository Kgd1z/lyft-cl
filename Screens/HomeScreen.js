import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <View style={{ marginTop: 350, alignItems: "center" }}>
        <Image
          style={{ width: 90, height: 60 }}
          source={require("../assets/logo.png")}
        />
      </View>

      <View
        style={{
          marginTop: 250,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#931ff2",
            height: 50,
            width: 230,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Get started
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#931ff2",
            marginTop: 35,
            fontSize: 13,
            fontWeight: "bold",
          }}
        >
          Ready to earn? Open the driver app
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
