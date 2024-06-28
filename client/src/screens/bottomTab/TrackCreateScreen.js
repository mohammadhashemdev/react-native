import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Track Create Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});
export default TrackCreateScreen;
