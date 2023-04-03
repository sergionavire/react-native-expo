import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { AppBar } from "./src/components/AppBar";
import { Home } from "./src/screens/Home";
import { ReplitExercise } from "./src/screens/ReplitExercise";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NotepadCreate } from "./src/screens/NotepadCreate";
import { NotepadEdit } from "./src/screens/NotepadEdit";
import { NotepadView } from "./src/screens/NotepadView";
import { NotepadList } from "./src/screens/NotepadList";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitle: "" }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Listar" component={NotepadList} />
        <Drawer.Screen name="Criar" component={NotepadCreate} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  scrollView: {
    flexGrow: 1,
  },
});

// import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
// import { ScrollView, StyleSheet, View } from "react-native";
// import { AppBar } from "./src/components/AppBar";
// import { Home } from "./src/screens/Home";
// import { ReplitExercise } from "./src/screens/ReplitExercise";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <AppBar />
//       <ScrollView style={styles.scrollView}>
//         {/* <Home /> */}
//         <ReplitExercise />
//       </ScrollView>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 25,
//   },
//   scrollView: {
//     flexGrow: 1,
//   },
// });
