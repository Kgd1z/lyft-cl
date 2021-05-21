import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View
          style={{
            marginTop: 320,
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image
            style={{ width: 90, height: 60 }}
            source={require("../assets/logo.png")}
          />
        </View>

        <View
          style={{
            marginTop: 250,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#931ff2",
              height: 50,
              width: 230,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate("NumberScreen")}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
              Get started
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "#931ff2",
              marginTop: 35,
              fontSize: 13,
              fontWeight: "bold",
            }}
          >
            Ready to earn? Open the driver app
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
