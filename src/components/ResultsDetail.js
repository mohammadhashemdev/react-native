import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.propertiesStyle}>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 10,
  },
  imgStyle: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },

  nameStyle: {
    fontWeight: "bold",
    fontSize: 15,
  },

  propertiesStyle: {
    color: "grey",
  },
});

export default ResultsDetail;
