import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Requirement(props) {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <CheckBox
          style={{ height: 30, width: 30, borderRadius: 5, marginRight: 15 }}
          value={isSelected}
          onValueChange={setSelection}
        /> */}

        <Text style={{ fontSize: 15 }}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
