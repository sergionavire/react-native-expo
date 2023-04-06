import "react-native-gesture-handler";
import { AppStateContext, initialAppStateContext } from "./src/AppStateContext";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./src/screens/Home";
import { Loader } from "./src/components/Loader";
import { apiNotePad } from "./api/apiNotePad";
import { NotepadCreate } from "./src/screens/NotepadCreate";
import { NotepadList } from "./src/screens/NotepadList";
import { NotepadEdit } from "./src/screens/NotepadEdit";
import { NotepadView } from "./src/screens/NotepadView";
import screens from "./src/screens.json";

const Drawer = createDrawerNavigator();

export default function App() {
  const [appState, setAppState] = useState(initialAppStateContext);

  useEffect(() => {
    const interceptorRequest = apiNotePad.interceptors.request.use((config) => {
      setAppState({
        loading: true,
      });
      return config;
    });

    const interceptorResponse = apiNotePad.interceptors.response.use(
      (config) => {
        setAppState({
          loading: false,
        });
        return config;
      }
    );

    return () => {
      apiNotePad.interceptors.request.eject(interceptorRequest);
      apiNotePad.interceptors.response.eject(interceptorResponse);
    };
  }, []);

  return (
    <AppStateContext.Provider value={appState}>
      <Loader loading={appState.loading} />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={screens.notepadList}
          screenOptions={{ headerTitle: "" }}
        >
          <Drawer.Screen name={screens.home} component={Home} />
          <Drawer.Screen name={screens.notepadList} component={NotepadList} />
          <Drawer.Screen
            name={screens.notepadCreate}
            component={NotepadCreate}
          />
          <Drawer.Screen
            name={screens.notepadView}
            component={NotepadView}
            options={{ drawerItemStyle: { display: "none" } }}
          />
          <Drawer.Screen
            name={screens.notepadEdit}
            component={NotepadEdit}
            options={{ drawerItemStyle: { display: "none" } }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppStateContext.Provider>
  );
}
