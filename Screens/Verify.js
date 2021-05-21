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
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Verify() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <View style={{ marginTop: 10, marginRight: 330 }}>
          <TouchableOpacity>
            <Image
              style={{ width: 26, height: 26 }}
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 20, paddingTop: 15 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#012d3f" }}>
            Whats the code?
          </Text>
          <Text style={{ paddingTop: 10, fontSize: 13, marginBottom: 20 }}>
            Enter the code sent to:
          </Text>
        </View>
        <View style={{ alignItems: "center", marginLeft: 20 }}>
          <CodeInput />
        </View>

        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={() => navigation.navigate("HealthScreen")}
        >
          <Image
            style={{ width: 62, height: 62, marginTop: 240, marginRight: 10 }}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
