import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../../CreatePostsScreen/CreatePostsScreen";
import { Ionicons } from "@expo/vector-icons";
import Home from "../../Home/Home";
import addPost from "../../../src/img/new.png";
import user from "../../../src/img/user.png";
import grid from "../../../src/img/grid.png";
import ProfileScreen from "../../ProfileScreen/ProfileScreen";
import { Image, Text } from "react-native";

const Tabs = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;

          if (route.name === "Публікації") {
            iconName = grid;
          } else if (route.name === "Створити публікацію") {
            iconName = addPost;
          } else if (route.name === "ProfileScreen") {
            iconName = user;
          }
          return <Text>ETF</Text>;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="Публікації"
        component={Home}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};
