import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Track() {
  return (
    <View
      style={{ flex: 1, alignItems: "center", marginLeft: 10, marginRight: 10 }}
    >
      <View style={{ paddingTop: 100 }}>
        <Image
          style={{ width: 250, height: 200 }}
          source={require("../assets/track.png")}
        />
      </View>
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#012d3f",
            paddingTop: 20,
            paddingBottom: 10,
            textAlign: "left",
          }}
        >
          Track your ride with push notifications
        </Text>
        <Text style={{ fontSize: 16 }}>
          Get updates on your drivers location (and more) through push
          notifications.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#ae4ff2",
          width: 330,
          height: 60,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 280,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Allow
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
