import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Foundation, AntDesign } from "@expo/vector-icons";

export function AppBar() {
  return (
    <View style={styles.appBar}>
      <Foundation name="clipboard-notes" size={58} color="black" />
      <Text style={styles.text}>Notepad</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          Alert.alert("vou adicionar um notepad");
        }}
      >
        <AntDesign name="pluscircle" size={24} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexBasis: 80,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "#ff0000",
  },
  text: {
    flexGrow: 1,
    backgroundColor: "#00ff00",
    verticalAlign: "middle",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "yellow",
  },
});
