import React from "react";
import { View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.boxOne}></View>
      <View style={styles.boxTwo}></View>
      <View style={styles.boxThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: "#D9D9D9",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  boxOne: {
    width: 100,
    height: 100,
    backgroundColor: "#DB8BF8",
  },
  boxTwo: {
    width: 100,
    height: 100,
    backgroundColor: "#FD6F6F",
    alignSelf: "flex-end",
  },
  boxThree: {
    width: 100,
    height: 100,
    backgroundColor: "#B2CD63",
  },
});

export default BoxScreen;
