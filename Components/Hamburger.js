import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Hamburger() {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10,
      }}
    >
      <Image
        style={{ height: 20, width: 20, marginTop: 18, marginLeft: 18 }}
        source={require("../assets/hamburger.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
