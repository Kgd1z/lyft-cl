import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Requirement from "../Components/Requirement";

export default function HealthScreen() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Image
          style={{ width: 330, height: 170, marginTop: 30 }}
          source={require("../assets/health.png")}
        />
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#012d3f",
              paddingTop: 40,
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
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#012d3f" }}
            >
              View CDC requirements
            </Text>
            <Image
              style={{ width: 16, height: 16, marginLeft: 10 }}
              source={require("../assets/rightarr.png")}
            />
          </View>
          <View style={{ paddingTop: 20, width: 300 }}>
            <Requirement title="Dont ride if you have COVID-19,think you have it or have related symptoms" />

            <Requirement title="Wear a face mask covering your mouth and nose the entire ride" />

            <Requirement title="Keep vehicle clean and sanitize your hand frequently" />

            <Requirement title="Leave the front seat empty in cars" />

            <Requirement title="turn off your cars recirculated air and keep windows down when possible" />
          </View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#012d3f",
              paddingTop: 20,
              paddingBottom: 10,
            }}
          >
            Drivers are doing their part, too
          </Text>
          <Text style={{ fontSize: 16 }}>
            We require drivers to wear masks we also give them cleaning guidance
            and provide
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
