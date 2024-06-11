import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Business Search" }}
          name="Home"
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
