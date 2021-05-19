import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Track() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ paddingTop: 100, backgroundColor: "#fff" }}>
        <Image
          style={{ width: 250, height: 200 }}
          source={require("../assets/track.png")}
        />
      </View>
      <View
        style={{ marginLeft: 10, marginRight: 10, backgroundColor: "#fff" }}
      >
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
          marginTop: 230,
        }}
        onPress={() => {
          Alert.alert(
            "'Lyft' Would Like to Send You Nottifications",
            "Notifications may include alerts sounds and icon badges, these may be configured in settings",
            [
              {
                text: "Dont Allow",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "Allow",
                onPress: () => navigation.navigate("MapScreen"),
              },
            ]
          );
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
