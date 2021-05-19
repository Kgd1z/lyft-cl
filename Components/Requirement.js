import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Requirement(props) {
  const [selected, setselected] = useState(false);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (selected === true) {
              setselected(false);
            } else {
              setselected(true);
            }
          }}
        >
          <View
            style={{
              width: 27,
              height: 27,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selected ? (
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/tick.png")}
              />
            ) : null}
          </View>
        </TouchableOpacity>

        <Text style={{ fontSize: 15, paddingLeft: 10 }}>{props.title}</Text>
      </View>

      <View
        style={{
          width: 330,
          borderColor: "black",
          borderWidth: 0.5,
          marginTop: 15,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});
