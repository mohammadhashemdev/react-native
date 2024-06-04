import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} />
      <Text style={styles.title}>Image of a {title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingBottom: 30,
  },
  title: {
    fontWeight: "bold",
  },
});

export default ImageDetail;
