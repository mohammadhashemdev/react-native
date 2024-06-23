import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "./../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

const EditScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state, editBlogPost } = useContext(Context);
  const id = route.params.id;
  let blogPost = state.find((blogpost) => blogpost.id === id);

  return (
    <View>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) =>
          editBlogPost(id, title, content, () => navigation.pop())
        }
      />
    </View>
  );
};

export default EditScreen;
