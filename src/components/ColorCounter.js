import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.colorContainer}>
      <Text style={styles.subheaderText}>{color}</Text>
      <Button onPress={onIncrease} title={`More ${color}`} />
      <Button onPress={onDecrease} title={`Less ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  subheaderText: {
    fontSize: 30,
    fontWeight: "bold",
  },

  colorContainer: {
    marginVertical: 20,
  },
});

export default ColorCounter;
