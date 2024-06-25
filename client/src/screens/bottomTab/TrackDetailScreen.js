import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackDetailScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.textStyle}>Track Detail Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});
export default TrackDetailScreen;
