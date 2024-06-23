import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

const CreateScreen = () => {
  const navigation = useNavigation();
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <BlogPostForm
        onSubmit={(title, content) =>
          addBlogPost(title, content, () => navigation.navigate("Index"))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
