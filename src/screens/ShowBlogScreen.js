import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowBlogScreen = ({ route }) => {
  const { state } = useContext(Context);
  const id = route.params.id;

  let blogPost = state.find((blogpost) => blogpost.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{blogPost.title}</Text>
      <Text style={styles.postContent}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 35,
    marginVertical: 15,
  },
  postContent: {
    fontSize: 18,
  },
});

export default ShowBlogScreen;
