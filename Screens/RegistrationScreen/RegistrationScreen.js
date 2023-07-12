import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const initialFocusField = false;

export function RegistrationScreen({ navigation }) {
  const [valueField, setValueField] = useState(initialState);
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [showPassValue, setShowPassValue] = useState("Показати");
  const [isSelectField, setIsSelectField] = useState(initialFocusField);

  const onBlurFocus = (e) => {
    setIsSelectField(initialFocusField);
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
    const emailRe = /^[A-Za-z0-9._-]+@[A-Za-z]+\.[A-Za-z]{2,4}$/;
    const passRe = /^(?=.*\d)(?=.*[A-Z])[A-Za-z0-9._-]{6,}$/;
    const loginRe = /^[A-Za-z0-9]{2,}$/;

    const { password, email, login } = valueField;
    if (login === "" || email === "" || password === "") {
      alert("Всі поля повинні бути заповненні");
      return;
    }

    if (!loginRe.test(login)) {
      alert(
        "Введіть коректний логін, мінімум 2 символи лише цифри на букви латиницею"
      );
      return;
    }

    if (!emailRe.test(email)) {
      alert("Введіть коректний email, приклад example@email.com");
      return;
    }

    if (!passRe.test(password)) {
      alert(
        "Пароль повинен бути на латиниці, мати мінімум 6 символів, одну велику літру та одну цифру"
      );
      return;
    }

    console.log(valueField);
    swapPage("login");
    setValueField(initialState);
  };

  const backToLogin = () => {
    navigation.navigate("Login");
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
                ...styles.registration,
                marginBottom: isSelectField ? -190 : 0,
              }}
            >
              <View style={styles.addImg}>
                <Image 
                  style={styles.svg}
                  source={require("../../src/img/add.png")}
                ></Image>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.form}>
                <TextInput
                  value={valueField.login}
                  onChangeText={(value) => {
                    setValueField((prevState) => ({
                      ...prevState,
                      login: value,
                    }));
                  }}
                  onFocus={() => {
                    setIsSelectField("login");
                  }}
                  onBlur={onBlurFocus}
                  placeholder="Логін"
                  style={
                    isSelectField === "login"
                      ? { ...styles.input, ...styles.activeField }
                      : { ...styles.input }
                  }
                  type={"email"}
                />
                <TextInput
                  value={valueField.email}
                  onChangeText={(value) => {
                    setValueField((prevState) => ({
                      ...prevState,
                      email: value,
                    }));
                  }}
                  onFocus={() => {
                    setIsSelectField("email");
                  }}
                  onBlur={onBlurFocus}
                  inputMode="email"
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
                    onFocus={() => {
                      setIsSelectField("password");
                    }}
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
                  <Text style={{ color: "#ffffff" }}>Зареєструватись</Text>
                </TouchableOpacity>
              </View>

              <Text>
                Вже є аккаунт? <Text onPress={backToLogin}>Увійти</Text>
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  activeField: { borderColor: "#FF6C00", backgroundColor: "#ffffff" },
  submit: {
    marginTop: 43,
    fontSize: 16,
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
    fontFamily: "Roboto-Medium",
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
    marginTop: -60,
    backgroundColor: "red",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  registration: {
    marginTop: "auto",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    fontFamily: "Roboto-Medium",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingBottom: 179,
  },
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
});
