import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowBlogScreen = ({ route }) => {
  const { state } = useContext(Context);
  const id = route.params.id;

  let blogPost = state.find((blogpost) => blogpost.id === id);

  return (
    <View>
      <Text>This is {blogPost.title} Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowBlogScreen;
