import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Text, Button, Input } from "@rneui/base";
import Spacer from "./Spacer";

const AuthForm = ({ title, errorMessage, onSubmit, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Text h3 h3Style={styles.titleStyle}>
        {title}
      </Text>

      <Spacer>
        <Input
          labelStyle={styles.labelStyle}
          label="Email"
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          labelStyle={styles.labelStyle}
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
      </Spacer>
      {errorMessage ? (
        <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
      ) : null}
      <Button
        title={buttonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginBottom: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  labelStyle: {
    fontSize: 24,
    color: "grey",
  },
  errorMessageStyle: {
    textAlign: "center",
    marginBottom: 10,
    color: "darkred",
    fontWeight: "semibold",
  },
});

export default AuthForm;
