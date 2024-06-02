import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const myName = "Mohammad Hashem";
  return (
    <View>
      <Text style={styles.headerText}>Getting started with React Native!</Text>
      <Text style={styles.subheaderText}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 45,
  },

  subheaderText: {
    fontSize: 20,
  },
});

export default ComponentScreen;
