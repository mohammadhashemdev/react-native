import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, useColorScheme } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowBlogScreen from "./src/screens/ShowBlogScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          options={({ navigation }) => ({
            title: "Blogs",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateScreen")}
              >
                <Entypo name="add-to-list" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
          name="Index"
          component={IndexScreen}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            title: "Post",
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EditScreen", { id: route.params.id })
                }
              >
                <Feather name="edit-3" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
          name="ShowBlog"
          component={ShowBlogScreen}
        />
        <Stack.Screen
          options={{ title: "Create Post" }}
          name="CreateScreen"
          component={CreateScreen}
        />
        <Stack.Screen
          options={{ title: "Edit Post" }}
          name="EditScreen"
          component={EditScreen}
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
