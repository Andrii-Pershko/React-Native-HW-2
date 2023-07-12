import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RegistrationScreen } from "../../RegistrationScreen/RegistrationScreen";
import LoginScreen from "../../LoginScreens/LoginScreens";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export const AuthNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        name="Registration"
        component={RegistrationScreen}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
      />
    </MainStack.Navigator>
  );
};
