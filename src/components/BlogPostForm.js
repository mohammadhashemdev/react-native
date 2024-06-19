import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues?.title);
  const [content, setContent] = useState(initialValues?.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Add Title:</Text>
      <TextInput
        placeholder="ex: A guid to read well..."
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Add Content:</Text>
      <TextInput
        placeholder="What the blogpost conveys???"
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default BlogPostForm;
