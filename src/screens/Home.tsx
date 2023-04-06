import styled from "styled-components";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
`;

export function Home({ navigation }: NativeStackScreenProps<ParamListBase>) {
  return (
    <Container>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.90145,
          longitude: -43.17892,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
