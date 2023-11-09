import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreens/LoginScreens";
import { Home } from "./Screens/Home/Home";

const MainStack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./src/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: "Registration", headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login", headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home", headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
