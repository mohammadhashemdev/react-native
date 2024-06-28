import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as AuthContext } from "../../../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  const handleSignOut = () => {
    signout();
  };
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Account Screen</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});
export default AccountScreen;
