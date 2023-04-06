import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NotepadType, initialEmptyNotepad } from "../types";
import { apiNotePad } from "../api/apiNotePad";
import { TextField } from "../components/TextField";
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
} from "../components/NotepadComponents";

export function NotepadEdit({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const [form, setForm] = useState(initialEmptyNotepad);
  const notepadId = route.params.id;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const {
        data: { title, subtitle, content, latitude, longitude },
      } = await apiNotePad.get<NotepadType>(`/notepads/${notepadId}`);
      setForm({
        ...form,
        title,
        subtitle,
        content,
        latitude,
        longitude,
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
