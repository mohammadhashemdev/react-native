import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  let [color, setColor] = useState([]);

  console.log(color);
  return (
    <View>
      <Button
        title="Add color"
        onPress={() => setColor(() => [...color, randomRgb()])}
      />
      <FlatList
        keyExtractor={(rgb) => rgb}
        data={color}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View
              style={{
                margin: 10,
                height: 80,
                width: 80,
                backgroundColor: item,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
