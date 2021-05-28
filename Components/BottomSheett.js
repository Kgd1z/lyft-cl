import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

export default function BottomSheett() {
  const sheetRef = React.createRef();
  fall = new Animated.Value(1);
  const renderInner = () => (
    <View style={{ backgroundColor: "red", height: 300 }}>
      <Text>Ohnenen</Text>
    </View>
  );

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BottomSheet
          ref={sheetRef}
          snapPoints={[0, 0, 0]}
          initialSnap={0}
          callbackNode={fall}
          renderContent={renderInner}
          borderRadius={10}
        />
      </View>
    </>
  );
}
