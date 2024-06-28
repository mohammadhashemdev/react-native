import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Context as AuthContext } from "./../../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const TrackListScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.textStyle}>Track List Screen</Text>
      <Button
        title="Detail Screen"
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
