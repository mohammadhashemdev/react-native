import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={styles.display}>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={"9"}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={"6"}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={"3"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    padding: 10,
  },
});

export default ImageScreen;
