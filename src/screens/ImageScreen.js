import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

import forestImage from "./../../assets/forest.jpg";
import beachImage from "./../../assets/beach.jpg";
import mountainImage from "./../../assets/mountain.jpg";

const ImageScreen = () => {
  return (
    <View style={styles.display}>
      <ImageDetail title="Forest" imageSource={forestImage} score={"9"} />
      <ImageDetail title="Beach" imageSource={beachImage} score={"6"} />
      <ImageDetail title="Mountain" imageSource={mountainImage} score={"3"} />
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    padding: 10,
  },
});

export default ImageScreen;
