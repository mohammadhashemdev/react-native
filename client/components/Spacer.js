import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ children }) => {
  return <View style={styles.space}>{children}</View>;
};

const styles = StyleSheet.create({
  space: {
    marginBottom: 30,
  },
});

export default Spacer;
