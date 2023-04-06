import { Text, View, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NotepadType, initialEmptyNotepad } from "../types";
import { apiNotePad } from "../../api/apiNotePad";
import { TextField } from "../components/TextField";
import { TextData } from "../components/TextData";
import styled from "styled-components";
import screens from "../screens.json";
import Toast from "react-native-root-toast";
import {
  DeleteButton,
  DeleteText,
  EditText,
  H1,
  Header,
  SaveButton,
  FormContainer,
  ButtonsView,
} from "../components/TestNotepadComponents";

const initialFormState = {
  title: "",
  subtitle: "",
  content: "",
};

export function NotepadEdit({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const [form, setForm] = useState(initialFormState);
  const notepadId = route.params.id;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const {
        data: { title, subtitle, content },
      } = await apiNotePad.get<NotepadType>(`/notepads/${notepadId}`);
      setForm({
        title,
        subtitle,
        content,
      });
    });
    return unsubscribe;
  }, [notepadId]);

  return (
    <FormContainer>
      <Header>
        <H1>Notepad: {notepadId}</H1>
        <SaveButton
          onPress={async () => {
            const { data } = await apiNotePad.put(
              `/notepads/${notepadId}`,
              form
            );

            if (data.success) {
              Toast.show("Notepad salvo!");
              navigation.navigate(screens.notepadView, {
                id: notepadId,
              });
            } else {
              console.log(data.erros.message);
              Toast.show(data.erros[0].message);
            }
          }}
        >
          <EditText>Salvar</EditText>
        </SaveButton>
      </Header>
      <TextField
        placeholder="Título"
        value={form.title}
        onChange={(title) => setForm({ ...form, title })}
      />
      <TextField
        placeholder="Subtítulo"
        value={form.subtitle}
        onChange={(subtitle) => setForm({ ...form, subtitle })}
      />
      <TextField
        placeholder="Conteúdo"
        value={form.content}
        onChange={(content) => setForm({ ...form, content })}
        multilines={true}
        numberOfLines={4}
      />
      <ButtonsView>
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
      </ButtonsView>
    </FormContainer>
  );
}
