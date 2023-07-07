import { useState } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import RegistrationScreen from "./Screens/Components/RegistrationScreen/RegistrationScreen";
import LoginScreens from "./Screens/Components/LoginScreens/LoginScreens";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./Screens/fonts/Roboto-Medium.ttf"),
  });
  const [activePage, setActivePage] = useState("registration");

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.img}
          source={require("./Screens/img/background.jpeg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keybord}
          >
            {activePage === "registration" ? (
              <RegistrationScreen swapPage={setActivePage}></RegistrationScreen>
            ) : (
              <LoginScreens swapPage={setActivePage}></LoginScreens>
            )}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  keybord: {
    flex: 1,
    marginTop: -150,
    paddingTop: -50,
  },
  img: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    flex: 1,
  },
});
