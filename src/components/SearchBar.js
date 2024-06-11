import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
  },

  inputStyle: {
    flex: 1,
    fontSize: 18,
  },

  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
  },
});

export default SearchBar;
