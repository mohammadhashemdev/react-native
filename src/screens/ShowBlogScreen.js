import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ShowBlogScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state } = useContext(Context);
  const id = route.params.id;

  let blogPost = state.find((blogpost) => blogpost.id === id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("EditScreen", { id })}
        >
          <Feather name="edit-3" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
