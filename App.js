import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowBlogScreen from "./src/screens/ShowBlogScreen";
import CreateScreen from "./src/screens/CreateScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          options={{
            title: "Blogs",
          }}
          name="Index"
          component={IndexScreen}
        />
        <Stack.Screen
          options={{ title: "Post" }}
          name="ShowBlog"
          component={ShowBlogScreen}
        />
        <Stack.Screen
          options={{ title: "Create Post" }}
          name="CreateScreen"
          component={CreateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
