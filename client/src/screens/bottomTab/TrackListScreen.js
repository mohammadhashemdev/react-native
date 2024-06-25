import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackListScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.textStyle}>Track List Screen</Text>
      <Button
        title="go to details"
        onPress={() => navigation.navigate("TrackDetailScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});
export default TrackListScreen;
