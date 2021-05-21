import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Requirement from "../Components/Requirement";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HealthScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: "#fff",
          }}
        >
          <Image
            style={{ width: 330, height: 170 }}
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
              We require drivers to wear masks we also give them cleaning
              guidance and provide
            </Text>
          </View>
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={() => navigation.navigate("Track")}
          >
            <Image
              style={{ width: 62, height: 62, marginTop: 240, marginRight: 10 }}
              source={require("../assets/next.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
