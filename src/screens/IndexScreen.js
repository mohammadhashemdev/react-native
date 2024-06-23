import React, { useCallback, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const navigation = useNavigation();
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getBlogPosts();
    }, [])
  );

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ShowBlog", { id: item.id })}
          >
            <View style={styles.blogItemBox}>
              <Text style={styles.blogItemText}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.iconStyle} name="trash-2" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blogItemBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    marginTop: 4,
    marginHorizontal: 5,
    borderRadius: 5,
  },

  blogItemText: {
    color: "black",
    fontWeight: "600",
  },

  iconStyle: {
    fontSize: 20,
    color: "black",
  },
});

export default IndexScreen;
