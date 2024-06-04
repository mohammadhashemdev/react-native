import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const goToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <View>
      <Text style={styles.text}>Hey There!</Text>
      <Button
        onPress={() => goToPage("Components")}
        title="Go to Components page"
      />
      <Button onPress={() => goToPage("List")} title="Go to Lists page" />
      <Button onPress={() => goToPage("Images")} title="Go to Images page" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
