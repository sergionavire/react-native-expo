import { Text, View, Alert } from "react-native";
import { TextField } from "../components/TextField";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { ButtonTag } from "../components/ButtonTag";
import { apiNotePad } from "../../api/apiNotePad";
import Toast from "react-native-root-toast";
import screens from "../screens.json";
import styled from "styled-components";
import {
  EditText,
  H1,
  Header,
  SaveButton,
  FormContainer,
} from "../components/TestNotepadComponents";

const initialFormState = {
  title: "",
  subtitle: "",
  content: "",
  latitude: 0,
  longitude: 0,
};

export function NotepadCreate({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setForm(initialFormState);
    });
    return unsubscribe;
  }, []);

  return (
    <FormContainer>
      <Header>
        <H1>Notepad: Novo</H1>
        <SaveButton
          onPress={async () => {
            const { data } = await apiNotePad.post(`/notepads`, form);
            if (data.success) {
              Toast.show("Notepad criado!");
              navigation.navigate(screens.notepadView, {
                id: data.data.id,
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
    </FormContainer>
  );
}
