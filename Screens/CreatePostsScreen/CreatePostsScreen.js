import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LocationSvg from "../../src/img/map-pin.svg";
import TrashSvg from "../../src/img/trash.svg";

export const CreatePostsScreen = () => {
  const [postName, setPostName] = useState("");
  const [location, setLocation] = useState("");
  const [showKeybord, setShowKeybord] = useState(false);
  const handleAddPost = () => {
    console.log("Пост добалено");
    resetField();
  };
  const resetField = () => {
    Keyboard.dismiss();
    setPostName("");
    setLocation("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ ...styles.form, marginTop: showKeybord ? -150 : 0 }}>
        <View style={styles.addPhoto}>
          <View style={styles.photo}>
            <Image
              style={{ borderRadius: 50 }}
              source={require("../../src/img/imageAddPhoto.jpg")}
            ></Image>
          </View>
          <Text style={{ color: "#bdbdbd", fontSize: 16 }}>
            Завантажте фото
          </Text>
        </View>
        <TextInput
          placeholderTextColor={"#bdbdbd"}
          onFocus={() => {
            setShowKeybord(true);
          }}
          onBlur={() => {
            setShowKeybord(false);
          }}
          onChangeText={(newText) => {
            setPostName(newText);
          }}
          style={styles.inputs}
          placeholderStyle={styles.placeholder}
          placeholder="Назва..."
          value={postName}
        ></TextInput>
        <View style={{ position: "relative", marginTop: 16 }}>
          <LocationSvg style={{ position: "absolute", top: 13 }} />
          <TextInput
            placeholderTextColor={"#bdbdbd"}
            onFocus={() => {
              setShowKeybord(true);
            }}
            onBlur={() => {
              setShowKeybord(false);
            }}
            onChangeText={(newText) => {
              setLocation(newText);
            }}
            style={{ ...styles.inputs, ...styles.inputCity }}
            placeholderStyle={styles.placeholder}
            placeholder="Місцевість..."
            value={location}
          />
        </View>
        <TouchableOpacity
          disabled={postName === "" || location === ""}
          onPress={handleAddPost}
          style={
            postName === "" || location === ""
              ? { ...styles.submit, ...styles.disabled }
              : { ...styles.submit }
          }
          activeOpacity={0.6}
        >
          <Text
            style={{
              color: postName === "" || location === "" ? "#bdbdbd" : "#ffffff",
            }}
          >
            Опублікувати
          </Text>
        </TouchableOpacity>
        <TrashSvg
          onPress={resetField}
          style={styles.trash}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  trash: { top: 25 },
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
  disabled: {
    backgroundColor: "#f6f6f6",
  },
  inputs: {
    width: 343,
    fontWeight: "500",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,

    paddingBottom: 16,
    paddingTop: 16,
  },
  placeholder: { fontWeight: 400 },
  inputCity: { paddingLeft: 28, fontWeight: "400" },
  photo: {
    borderRadius: 8,
    height: 240,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  addPhoto: { width: 343, height: 267, marginBottom: 32 },
  form: {
    backgroundColor: "#fff",
    position: "relative",
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 36,
    alignItems: "center",
  },
});
