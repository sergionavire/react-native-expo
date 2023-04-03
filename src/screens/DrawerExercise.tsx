import * as React from "react";
import { Pressable, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to our Home Screen</Text>
      <Text>Checkout screens from the tab below</Text>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Open Drawer</Text>
      </Pressable>
    </View>
  );
}

function Conference({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Conference Details</Text>
      <Pressable
        onPress={() => navigation.navigate("Story")}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Go to Story</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Open Drawer</Text>
      </Pressable>
    </View>
  );
}

function Story({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Our Story</Text>
      <Pressable
        onPress={() => navigation.navigate("Conference")}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Go to Conference</Text>
      </Pressable>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Conference" component={Conference} />
        <Drawer.Screen name="Story" component={Story} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
