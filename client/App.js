import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import AccountScreen from "./src/screens/bottomTab/AccountScreen";
import SigninScreen from "./src/screens/stack/SigninScreens";
import SignupScreen from "./src/screens/stack/SignupScreen";
import TrackCreateScreen from "./src/screens/bottomTab/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/bottomTab/TrackDetailScreen";
import TrackListScreen from "./src/screens/bottomTab/TrackListScreen";
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./context/AuthContext";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TrackListScreen">
      <Stack.Screen name="TrackListScreen" component={TrackListScreen} />
      <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      inactiveColor="grey"
      activeColor="darkblue"
      activeIndicatorStyle={{ backgroundColor: "#D6E9FF" }}
      barStyle={{ backgroundColor: "white" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === "TrackList") {
            iconName = focused ? "map-sharp" : "map-outline";
          } else if (route.name === "TrackCreate") {
            iconName = focused ? "create-sharp" : "create-outline";
          } else if (route.name === "AccountScreen") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarStyle: {
          paddingVertical: 10,
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="TrackList"
        component={StackNavigator}
        options={{ tabBarLabel: "Tracks" }}
      />
      <Tab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{ tabBarLabel: "Create" }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ tabBarLabel: "Account" }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <NavigationContainer>
      {state.token ? (
        <BottomTab />
      ) : (
        <Stack.Navigator initialRouteName="SigninScreen">
          <Stack.Screen
            name="SigninScreen"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
