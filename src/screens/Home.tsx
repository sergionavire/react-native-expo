import styled from "styled-components";
import { View, StyleSheet, Image } from "react-native";
import MapView, { MapMarker, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { NotepadType } from "../types";
import { apiNotePad } from "../api/apiNotePad";
import * as Location from "expo-location";
import Toast from "react-native-root-toast";
import screens from "../screens.json";

const IconVasco = require("../../assets/icon-vasco.png");

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
`;

type Coords = {
  latitude: number | null;
  longitude: number | null;
};

const initialRegion = {
  // latitude: -22.967553,
  // longitude: -43.383646,
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const InitialNotepads: NotepadType[] = [];

function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export function Home({ navigation, route }: NativeStackScreenProps<any>) {
  const coords = route.params?.coords;
  const [region, setRegion] = useState(initialRegion);
  const [notepads, setNotepads] = useState(InitialNotepads);

  useEffect(() => {
    Location.requestForegroundPermissionsAsync().then(async (response) => {
      if (response.status === "granted") {
        await delay(2);
        const position = await Location.getCurrentPositionAsync();
        setRegion({
          ...region,
          ...position.coords,
        });
      } else {
        Toast.show("Esse app precisa de permissão para a geolocalização!");
      }
    });

    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await apiNotePad.get<NotepadType[]>("/notepads/");
      setNotepads(data);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (
      coords !== undefined &&
      coords.latitude !== null &&
      coords.longitude !== null
    ) {
      setRegion({
        ...region,
        ...coords,
      });
    }
  }, [coords]);

  return (
    <Container>
      <MapView
        onLongPress={(event) => {
          const coords = event.nativeEvent.coordinate;
          navigation.navigate(screens.notepadCreate, {
            coords,
          });
        }}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        showsUserLocation
      >
        {notepads
          .filter(
            ({ latitude, longitude }) => latitude !== null && longitude !== null
          )
          .map(({ latitude, longitude, id }) => {
            return (
              <MapMarker
                onPress={() => {
                  navigation.navigate(screens.notepadView, {
                    id,
                  });
                }}
                key={id}
                coordinate={{
                  latitude,
                  longitude,
                }}
                pinColor="#887"
              >
                <Image
                  source={IconVasco}
                  resizeMode="contain"
                  style={{
                    width: 32,
                    height: 32,
                  }}
                />
              </MapMarker>
            );
          })}
      </MapView>
    </Container>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
