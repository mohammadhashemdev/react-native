import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ShowResultsScreen from "./src/screens/ShowResultsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ title: "Business Search" }}
          name="Home"
          component={SearchScreen}
        />
        <Stack.Screen
          options={{ title: "Restaurant" }}
          name="Business"
          component={ShowResultsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
