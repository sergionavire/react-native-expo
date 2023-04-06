import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { NotepadType, initialEmptyNotepad } from "../types";
import { apiNotePad } from "../api/apiNotePad";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextData } from "../components/TextData";
import screens from "../screens.json";
import Toast from "react-native-root-toast";
import {
  DeleteButton,
  DeleteText,
  EditText,
  H1,
  Header,
  ButtonEdit,
  FormContainer,
} from "../components/NotepadComponents";

export function NotepadView({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const [notepad, setNotepad] = useState(initialEmptyNotepad);
  const notepadId = route.params.id;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const res = await apiNotePad.get<NotepadType>(`/notepads/${notepadId}`);
      const data = res.data;

      setNotepad(data);
    });
    return unsubscribe;
  }, [notepadId]);

  return (
    <NotepadContainer>
      <Header>
        <H1>Notepad: {notepad.id}</H1>
        <ButtonEdit
          onPress={() => {
            navigation.navigate(screens.notepadEdit, {
              id: notepadId,
            });
          }}
        >
          <EditText>Editar</EditText>
        </ButtonEdit>
        <ButtonEdit
          onPress={() => {
            navigation.navigate(screens.home, {
              coords: {
                latitude: notepad.latitude,
                longitude: notepad.longitude,
              },
            });
          }}
        >
          <EditText>Ver mapa</EditText>
        </ButtonEdit>
      </Header>
      <TextData>{notepad.created_at}</TextData>
      <Title>{notepad.title}</Title>
      <Subtitle>{notepad.subtitle}</Subtitle>
      <Content>{notepad.content}</Content>
      <Text>Latitude: {notepad.latitude}</Text>
      <Text>Longitude: {notepad.longitude}</Text>
      <DeleteButton
        onPress={async () => {
          const { data } = await apiNotePad.delete(`/notepads/${notepadId}`);
          if (data.success) {
            Toast.show("Notepad excluído");
            navigation.navigate(screens.notepadList);
          } else {
            Toast.show(data.errors[0].message);
          }
        }}
      >
        <DeleteText>Excluir</DeleteText>
      </DeleteButton>
    </NotepadContainer>
  );
}

const Title = styled.Text`
  font-weight: 600;
  font-size: 22px;
`;
const Subtitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;
const Content = styled.Text`
  font-size: 14px;
`;

const NotepadContainer = styled.View`
  padding: 15px;
`;
