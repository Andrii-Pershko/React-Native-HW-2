import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const initialFocusField = false;

export default function LoginScreen({ navigation }) {
  const [valueField, setValueField] = useState(initialState);
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [showPassValue, setShowPassValue] = useState("Показати");
  const [isSelectField, setIsSelectField] = useState(initialFocusField);

  const onBlurFocus = () => {
    setIsSelectField(false);
  };

  const toogleShowBtn = () => {
    setHiddenPassword(!hiddenPassword);
    if (showPassValue === "Показати") {
      setShowPassValue("Приховати");
    } else {
      setShowPassValue("Показати");
    }
  };

  const handleSubmiForm = () => {
    const { password, email } = valueField;
    if (email === "" || password === "") {
      alert("Всі поля повинні бути заповненні");
      return;
    }
    navigation.navigate("Home", { user: valueField });
    setValueField(initialState);
  };

  const goToRegistration = () => {
    navigation.navigate("Registration");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.img}
          source={require("../../src/img/background.jpeg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keybord}
          >
            <View
              style={{
                ...styles.login,
                marginBottom: isSelectField ? -250 : 0,
              }}
            >
              <Text style={styles.title}>Увійти</Text>
              <View style={styles.form}>
                <TextInput
                  value={valueField.email}
                  onChangeText={(value) => {
                    setValueField((prevState) => ({
                      ...prevState,
                      email: value,
                    }));
                  }}
                  onFocus={() => setIsSelectField("email")}
                  onBlur={onBlurFocus}
                  placeholder="Адреса електроної пошти"
                  style={
                    isSelectField === "email"
                      ? { ...styles.input, ...styles.activeField }
                      : { ...styles.input }
                  }
                />
                <View style={{ width: "100%", alignItems: "center" }}>
                  <TextInput
                    value={valueField.password}
                    onChangeText={(value) => {
                      setValueField((prevState) => ({
                        ...prevState,
                        password: value,
                      }));
                    }}
                    onFocus={() => setIsSelectField("password")}
                    onBlur={onBlurFocus}
                    placeholder="Пароль"
                    style={
                      isSelectField === "password"
                        ? {
                            ...styles.input,
                            ...styles.password,
                            ...styles.activeField,
                          }
                        : { ...styles.input, ...styles.password }
                    }
                    secureTextEntry={hiddenPassword}
                  />
                  <TouchableOpacity
                    style={styles.showPass}
                    onPress={toogleShowBtn}
                  >
                    <Text>{showPassValue}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={handleSubmiForm}
                  style={styles.submit}
                  activeOpacity={0.6}
                >
                  <Text style={{ color: "#ffffff" }}>Увійти</Text>
                </TouchableOpacity>
              </View>

              <Text>
                Немаєте аккаунту?
                <Text onPress={goToRegistration}> Зареєструватись</Text>
              </Text>
            </View>
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
  activeField: { borderColor: "#FF6C00", backgroundColor: "#FFFFFF" },
  submit: {
    fontSize: 16,
    marginTop: 43,
    backgroundColor: "#FF6C00",
    width: "90%",
    maxWidth: 400,
    marginHorizontal: 16,
    alignItems: "center",
    padding: 16,
    borderRadius: 100,
    marginBottom: 16,
  },
  showPass: {
    position: "absolute",
    right: "10%",
    top: 0,
    height: 50,
    justifyContent: "center",
  },
  password: { paddingRight: 100 },
  form: {
    width: "100%",
    alignItems: "center",
    fontFamily: "Roboto-Medium",
  },
  input: {
    padding: 16,
    width: "90%",
    maxWidth: 400,
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  svg: {
    width: 25,
    height: 25,
    position: "absolute",
    right: -12,
    bottom: 12,
  },
  addImg: {
    marginBottom: 32,
    display: "flex",
    position: "relative",
    width: 120,
    height: 120,
    backgroundColor: "red",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  login: {
    marginTop: "auto",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    fontFamily: "Roboto-Medium",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 34,
    paddingBottom: 195,
  },
});
