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

const SigninScreen = () => {
  const navigation = useNavigation();
  const { state, signin } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.containerStyle}>
          <AuthForm
            title="Login"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            buttonText="Login"
          />
          <NavLink handleNavigation={() => navigation.navigate("SignupScreen")}>
            Don't have an account? Sign up
          </NavLink>
        </View>
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

export default SigninScreen;
