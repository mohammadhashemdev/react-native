import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  let message = "";

  if (password.length < 5) message = "Password must be more than 5 characters";
  else message = "";

  return (
    <View>
      <Text style={styles.inputTitle}>Type your passwrod:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(curValue) => setPassword(curValue)}
      />

      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
  },

  inputTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  message: {
    textAlign: "center",
  },
});

export default TextScreen;
