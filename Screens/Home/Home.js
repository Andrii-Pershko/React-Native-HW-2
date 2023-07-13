import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "../PostsScreen/PostsScreen";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";

import UserSvg from "../../src/img/user.svg";
import GridSvg from "../../src/img/grid.svg";
import AddSvg from "../../src/img/new.svg";
import ArrowLeft from "../../src/img/arrow-left.svg";
import { useRoute } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  const {
    params: {
      user: { email },
    },
  } = useRoute();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        style: {
          backgroundColor: "white",
          borderTopWidth: 5,
          borderTopColor: "lightgray",
        },
        tabBarIcon: () => {
          if (route.name === "Публікації") {
            return (
              <View style={{ marginTop: 15, marginRight: -70 }}>
                <GridSvg
                  width={24}
                  height={24}
                />
              </View>
            );
          } else if (route.name === "Створити публікацію") {
            return (
              <View style={{ marginTop: 15 }}>
                <AddSvg
                  width={79}
                  height={40}
                />
              </View>
            );
          } else if (route.name === "ProfileScreen") {
            return (
              <View style={{ marginTop: 15, marginLeft: -70 }}>
                <UserSvg
                  width={24}
                  height={24}
                />
              </View>
            );
          }
        },
      })}
    >
      <Tabs.Screen
        initialParams={{ propValue: email }}
        name="Публікації"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Публікації",
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
          },
          headerLeft: () => {},
          headerRight: () => (
            <TouchableOpacity
              title="Перейти"
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={styles.buttonExit}
            >
              <Image source={require("../../src/img/log-out.png")}></Image>
            </TouchableOpacity>
          ),
          tabBarLabel: "",
        })}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          tabBarStyle: { display: "none" },
          title: "Створити публікацію",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ArrowLeft
                width={24}
                height={24}
                style={styles.arrowLeft}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: "",
        })}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "ProfileScreen",
          headerShown: false,
          tabBarLabel: "",
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  arrowLeft: { marginLeft: 16 },
  buttonExit: {
    marginRight: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
