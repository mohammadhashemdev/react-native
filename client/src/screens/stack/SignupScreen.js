import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.textStyle}>Signup Screen</Text>
      <Button
        title="go to login page"
        onPress={() => navigation.navigate("SigninScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});
export default SignupScreen;
