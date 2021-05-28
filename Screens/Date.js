import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
export default function Date() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginTop: 15 }}>
        <Image
          style={{ height: 24, width: 24, marginLeft: 15 }}
          source={require("../assets/back.png")}
        />
        <Calendar
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            textSectionTitleDisabledColor: "#d9e1e8",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "red",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "blue",
            indicatorColor: "blue",
            textDayFontFamily: "monospace",
            textMonthFontFamily: "monospace",
            textDayHeaderFontFamily: "monospace",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"yyyy MM"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          firstDay={1}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={(addMonth) => addMonth()}
          renderHeader={(date) => {}}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
