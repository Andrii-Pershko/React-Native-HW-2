import { useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

export const PostsScreen = () => {
  const route = useRoute();
  const propValue = route.params?.propValue;

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={require("../../src/img/UserPhoto.jpg")}></Image>
        <View style={styles.dataBox}>
          <Text style={styles.Name}>User Name</Text>
          <Text style={styles.Email}>{propValue}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Email: { fontSize: 11, fontWeight: 400, color: "#212121CC" },
  Name: { fontSize: 13, fontWeight: 700 },
  dataBox: { display: "flex", justifyContent: "center", marginLeft: 8 },
  user: { width: 171, display: "flex", flexDirection: "row" },
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,

    backgroundColor: "#fff",
  },
});
