import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CodeInput from "../Components/CodeInput";
export default function Verify() {
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
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Whats the code?
        </Text>
        <Text style={{ paddingTop: 10, fontSize: 13, marginBottom: 20 }}>
          Enter the code sent to:
        </Text>
      </View>
      <View style={{ alignItems: "center", marginLeft: 20 }}>
        <CodeInput />
      </View>

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
