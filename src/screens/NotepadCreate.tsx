import { Text, View, Alert } from "react-native";
import { TextField } from "../components/TextField";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { ButtonTag } from "../components/ButtonTag";
import { apiNotePad } from "../api/apiNotePad";
import Toast from "react-native-root-toast";
import screens from "../screens.json";
import styled from "styled-components";
import { NotepadType, initialEmptyNotepad } from "../types";
import * as Location from "expo-location";

import {
  EditText,
  H1,
  Header,
  SaveButton,
  FormContainer,
} from "../components/NotepadComponents";

const initialFormState = {
  title: "",
  subtitle: "",
  content: "",
  latitude: 0,
  longitude: 0,
};

export function NotepadCreate({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const coords = route.params?.coords;
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setForm(initialFormState);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (coords !== undefined) {
      setForm({
        ...form,
        ...coords,
      });
    } else {
      Location.requestForegroundPermissionsAsync().then(async (response) => {
        if (response.status === "granted") {
          const position = await Location.getCurrentPositionAsync();
          setForm({
            ...form,
            ...position.coords,
          });
        } else {
          Toast.show("Esse app precisa de permissão para a geolocalização!");
        }
      });
    }
  }, [coords]);

  return (
    <FormContainer>
      <Header>
        <H1>Notepad: Novo</H1>
        <SaveButton
          onPress={async () => {
            if (form.title.length < 8) {
              Toast.show("O título deve ter pelo menos 8 caracteres");
              return null;
            }
            if (form.subtitle.length < 16) {
              Toast.show("O subtítulo deve ter pelo menos 16 caracteres");
              return null;
            }
            if (form.content.length < 32) {
              Toast.show("O conteúdo deve ter pelo menos 32 caracteres");
              return null;
            }

            const { data } = await apiNotePad.post("/notepads", form);

            if (data.success) {
              Toast.show("Notepad criado!");
              navigation.navigate(screens.notepadView, {
                id: data.notepad.id,
              });
            } else {
              // Toast.show(errorMessage);
              Toast.show("Ocorreu algum erro");
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
      <TextField
        placeholder="Latitude"
        value={form.latitude.toString()}
        onChange={(latitude) =>
          setForm({ ...form, latitude: Number(latitude) })
        }
      />
      <TextField
        placeholder="Longitude"
        value={form.longitude.toString()}
        onChange={(longitude) =>
          setForm({ ...form, longitude: Number(longitude) })
        }
      />
    </FormContainer>
  );
}
