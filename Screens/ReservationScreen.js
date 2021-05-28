import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReservationScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ marginLeft: 15, marginRight: 20 }}>
        <View
          style={{
            flexDirection: "row",
            width: 340,

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ height: 20, width: 20, position: "absolute", left: 0 }}
            source={require("../assets/back.png")}
          />
          <TouchableOpacity
            style={{
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ alignSelf: "center", fontSize: 16, fontWeight: "bold" }}
            >
              Sedan
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ marginTop: 20, height: 120, width: 220 }}
            source={require("../assets/sedan.png")}
          />
          <View style={{ marginTop: 20, flexDirection: "row" }}>
            <Text>e.g. Chrysler 300</Text>
            <Image
              style={{ marginLeft: 15 }}
              source={require("../assets/people.png")}
            />
            <Text style={{ paddingLeft: 3 }}>5</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 380,
          backgroundColor: "grey",
          height: 10,
          marginTop: 20,
        }}
      ></View>
      <View style={{ marginLeft: 15, marginRight: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#012d3f",
            paddingTop: 10,
            paddingBottom: 20,
          }}
        >
          Reservation Details
        </Text>
        <View>
          <Image
            style={{ position: "absolute", right: 10, width: 14, height: 14 }}
            source={require("../assets/right.png")}
          />
          <Detail
            path={require("../assets/calendar.png")}
            title="Pickup Information"
            description="233 Airrport road"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function Detail(props) {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 17, height: 17, marginRight: 20 }}
          source={props.path}
        />
        <Text
          style={{
            fontWeight: "bold",
            color: "#012d3f",
            fontSize: 15,
            paddingBottom: 3,
          }}
        >
          {props.title}
        </Text>
        <Image />
      </View>
      <View style={{ marginLeft: 37 }}>
        <Text>{props.description}</Text>
      </View>

      <View
        style={{
          height: 0.5,
          width: 340,
          backgroundColor: "grey",
          marginTop: 10,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});
