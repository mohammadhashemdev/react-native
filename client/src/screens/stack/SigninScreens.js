import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SigninScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Signin Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default SigninScreen;
