import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const NavLink = ({ children, handleNavigation }) => {
  return (
    <TouchableOpacity onPress={handleNavigation}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "blue",
  },
});

export default NavLink;
