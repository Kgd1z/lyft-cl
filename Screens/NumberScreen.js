import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-number-input";

export default function NumberScreen() {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 60, marginRight: 330 }}>
        <TouchableOpacity>
          <Image
            style={{ width: 26, height: 26 }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 20, paddingTop: 15 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#012d3f" }}>
          Whats your number?
        </Text>
        <Text style={{ paddingTop: 10, fontSize: 13, marginBottom: 20 }}>
          We'll text a code to verify your phone
        </Text>
        <PhoneInput
          defaultValue={value}
          defaultCode="DM"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          autoFocus
          textContainerStyle={{
            backgroundColor: "#fff",
            borderWidth: 0.5,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderColor: "#cbced3",
          }}
          containerStyle={{
            borderWidth: 0.5,
            borderRadius: 10,
            width: 330,
            borderColor: "#cbced3",
          }}
        />
      </View>
      <Text
        style={{
          color: "#931ff2",
          marginTop: 20,
          fontSize: 13,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 200,
        }}
      >
        Find my account
      </Text>

      <TouchableOpacity style={{ alignSelf: "flex-end" }}>
        <Image
          style={{ width: 62, height: 62 }}
          source={require("../assets/next.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
