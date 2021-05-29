import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
              flexDirection: "row",
            }}
          >
            <Text
              style={{ alignSelf: "center", fontSize: 16, fontWeight: "bold" }}
            >
              Sedan
            </Text>
            <Image
              style={{ width: 14, height: 14, marginLeft: 5 }}
              source={require("../assets/down-arrow.png")}
            />
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
          backgroundColor: "#eaecfc",
          height: 6,
          marginTop: 20,
        }}
      ></View>
      <ScrollView>
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
            <Detail
              path={require("../assets/stars.png")}
              title="US$10 Lyft ride credit"
              description="Easily get home after dropping off your rental with a US$10 ride credit "
            />
            <Detail
              path={require("../assets/wheel.png")}
              title="Select a specific car"
              description="Choose the exact make and model of your rental before pick up, and it'll be waiting when you arrive"
            />
            <Detail
              path={require("../assets/manstop.png")}
              title="Pickup Information"
              description="Booking throught the lyft app allows you to have access to Sixts expedited pickup where"
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ borderTopWidth: 0.2, borderColor: "grey" }}>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 20,
            paddingTop: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#012d3f",
              fontSize: 15,
              paddingBottom: 3,
              paddingTop: 5,
            }}
          >
            Est.Total
          </Text>
          <Image
            style={{ marginLeft: 5, width: 14, height: 14 }}
            source={require("../assets/info.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
              color: "#012d3f",
              fontSize: 15,
              paddingBottom: 3,
              paddingTop: 5,
              paddingLeft: 170,
            }}
          >
            US$524.74
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#ae4ff2",
            width: 330,
            height: 50,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Reserve
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Detail(props) {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 20, height: 20, marginRight: 20, marginTop: 5 }}
          source={props.path}
        />
        <Text
          style={{
            fontWeight: "bold",
            color: "#012d3f",
            fontSize: 15,
            paddingBottom: 3,
            paddingTop: 5,
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
