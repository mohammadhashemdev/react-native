import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

import { Context as AuthContext } from "../../../context/AuthContext";
import AuthForm from "../../../components/AuthForm";
import NavLink from "../../../components/NavLInk";

const SignupScreen = () => {
  const navigation = useNavigation();
  const { state, signup } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.containerStyle}>
          <AuthForm
            title="Sign Up to Tracker"
            errorMessage={state.errorMessage}
            buttonText="Sing Up"
            onSubmit={signup}
          />
        </View>
        <NavLink handleNavigation={() => navigation.navigate("SigninScreen")}>
          Already have and account?
        </NavLink>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
});
export default SignupScreen;
