import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Image, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
export default function LicenseCam() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            position: "absolute",
            left: 20,
            top: 17,
            height: 20,
            width: 20,
          }}
          source={require("../assets/close.png")}
        />
        <Text
          style={{
            fontWeight: "bold",
            color: "#012d3f",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Driver's license scan
        </Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ width: 250 }}>
              <Text style={styles.modalText}>Couldnt read barcode</Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  paddingHorizontal: 1,
                }}
              >
                Try manually entering your driver's license info.
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderTopWidth: 0.3,
                width: 330,
                height: 60,
                marginTop: 41,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("ManualEntry");
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: "#012d3f", fontSize: 15 }}
              >
                Manual entry
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: 0.3,
                width: 330,
                height: 50,

                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{ color: "#012d3f", fontSize: 15 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            "'Lyft' Would Like to Access the Camera",
            "Lyft needs access to your camera to upload your picture.",
            [
              {
                text: "Dont Allow",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => setModalVisible(!modalVisible),
              },
            ]
          );
        }}
      >
        <View
          style={{
            width: 330,
            height: 550,
            backgroundColor: "#eaecfc",
            alignSelf: "center",
            marginTop: 30,
            borderRadius: 10,
          }}
        ></View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 30,
          paddingLeft: 30,
        }}
      >
        <Image
          style={{ marginRight: 50 }}
          source={require("../assets/keyboard.png")}
        />
        <Image
          style={{
            position: "absolute",
            top: 22,
            left: 23,
            width: 40,
            height: 40,
          }}
          source={require("../assets/oval.png")}
        />
        <View style={{ width: 180, alignSelf: "center", marginRight: 30 }}>
          <Text
            style={{
              textAlign: "center",
              paddingRight: 30,
              color: "#012d3f",
              fontSize: 15,
            }}
          >
            Must be 21+ with license
          </Text>
        </View>
        <Image
          style={{
            position: "absolute",
            top: 22,
            width: 40,
            height: 40,
            right: 28,
          }}
          source={require("../assets/oval.png")}
        />
        <Image source={require("../assets/flashlight.png")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 330,
    height: 250,
    backgroundColor: "white",
    borderRadius: 10,
    paddingTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",

    fontWeight: "bold",
    color: "#012d3f",
    fontSize: 15,
  },
});
