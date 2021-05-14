import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function CodeInput() {
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        keyboardType="number-pad"
        style={{
          borderBottomWidth: 1,
          height: 40,
          width: 40,
          marginRight: 20,
        }}
      />
      <TextInput
        style={{
          borderBottomWidth: 1,
          height: 40,
          width: 40,
          marginRight: 20,
        }}
      />
      <TextInput
        style={{
          borderBottomWidth: 1,
          height: 40,
          width: 40,
          marginRight: 20,
        }}
      />
      <TextInput
        style={{
          borderBottomWidth: 1,
          height: 40,
          width: 45,
          marginRight: 20,
        }}
      />
      <TextInput
        style={{
          borderBottomWidth: 1,
          height: 40,
          width: 40,
          marginRight: 20,
        }}
      />
      <TextInput
        style={{
          borderBottomWidth: 1,
          height: 40,
          width: 40,
          marginRight: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
