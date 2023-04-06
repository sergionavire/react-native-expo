import { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { apiNotePad } from "../../api/apiNotePad";
import { H1 } from "../components/Heading";
import styled from "styled-components/native";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import screens from "../screens.json";
import { NotepadType, initialEmptyNotepad } from "../types";

async function getNotePadList() {
  const res = await apiNotePad.get("/notepads");
  const data = await res.data;
  return data;
}

export function NotepadList({
  navigation,
  route,
}: NativeStackScreenProps<ParamListBase>) {
  const valorInicial: NotepadType[] = [];
  const [notepadList, setNotepadList] = useState(valorInicial);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await apiNotePad.get("/notepads");
      setNotepadList(data);
    });
  }, []);

  return (
    <View>
      <H1>Notepad List</H1>
      <View>
        <FlatList
          data={notepadList}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => {
            return (
              <Notepad
                key={item.id}
                onPress={() => {
                  navigation.navigate(screens.notepadView, {
                    id: item.id,
                  });
                }}
              >
                <NotepadText>
                  <Title>
                    {item.id}: {item.title}
                  </Title>
                  <Subtitle>{item.subtitle}</Subtitle>
                  <Text>
                    La: {item.latitude} / Lo: {item.longitude}
                  </Text>
                </NotepadText>
              </Notepad>
            );
          }}
        />
      </View>
    </View>
  );
}

const Notepad = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 15px 5px;
  border: 1px solid grey;
`;
const NotepadText = styled.View`
  flex: 1;
`;
const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const Subtitle = styled.Text`
  font-size: 14px;
`;
