import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const initialFocusField = false;

export default function RegistrationScreen({ swapPage }) {
  const [valueField, setValueField] = useState(initialState);
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [showPassValue, setShowPassValue] = useState("Показати");
  const [isSelectField, setIsSelectField] = useState(initialFocusField);

  const onBlurFocus = () => {
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
    const { password, email, login } = valueField;
    if (login === "" || email === "" || password === "") {
      alert("Всі поля повинні бути заповненні");
      return;
    }
    console.log(valueField);
    swapPage("login");
    setValueField(initialState);
  };

  const backToLogin = () => {
    swapPage("login");
  };

  return (
    <View
      style={{
        ...styles.registration,
        marginBottom: isSelectField ? -190 : 0,
      }}
    >
      <View style={styles.addImg}>
        <Image
          style={styles.svg}
          source={require("../../img/add.png")}
        ></Image>
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.form}>
        <TextInput
          value={valueField.login}
          onChangeText={(value) => {
            setValueField((prevState) => ({ ...prevState, login: value }));
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
        />
        <TextInput
          value={valueField.email}
          onChangeText={(value) => {
            setValueField((prevState) => ({ ...prevState, email: value }));
          }}
          onFocus={() => {
            setIsSelectField("email");
          }}
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
              setValueField((prevState) => ({ ...prevState, password: value }));
            }}
            onFocus={() => {
              setIsSelectField("password");
            }}
            onBlur={onBlurFocus}
            placeholder="Пароль"
            style={
              isSelectField === "password"
                ? { ...styles.input, ...styles.password, ...styles.activeField }
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
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={backToLogin}
      >
        <Text>Вже є аккаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
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
    paddingBottom: 79,
  },
});
