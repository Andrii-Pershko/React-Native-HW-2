import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import TrashUserPhoto from "../../src/img/deleteUserPhoto.svg";
import LogOut from "../../src/img/log-out.svg";

export const ProfileScreen = ({ navigation }) => {
  const [deletePhoto, setDeleteFoto] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require("../../src/img/background.jpeg")}
      ></ImageBackground>
      <View style={styles.data}>
        <LogOut
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.logOut}
        />
        <View
          style={{
            position: "relative",
            marginBottom: 32,
            marginTop: -60,
            backgroundColor: "#dbdbdb",
            borderRadius: 16,
          }}
        >
          <TrashUserPhoto
            onPress={() => {
              setDeleteFoto(true);
            }}
            style={styles.trashUserPhoto}
          ></TrashUserPhoto>
          <Image
            style={
              deletePhoto
                ? { ...styles.userImg, ...styles.hidden }
                : { ...styles.userImg }
            }
            source={require("../../src/img/bigUser.jpg")}
          />
        </View>

        <Text style={styles.userName}>User full name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hidden: { opacity: 0 },
  logOut: { top: 22, right: 16, position: "absolute" },
  trashUserPhoto: {
    position: "absolute",
    bottom: 8,
    right: 0,
    zIndex: 2,
    transform: [{ rotate: "90deg" }, { translateY: -18 }],
  },
  userName: {
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 33,
  },
  data: {
    position: "relative",
    width: "100%",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: "auto",
    paddingRight: 16,
    paddingLeft: 16,
  },
  userImg: { borderRadius: 16 },
  img: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});
