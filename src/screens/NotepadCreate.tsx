import { Text, TextInput, View } from "react-native";
import { TextField } from "../components/TextField";
import { H1 } from "../components/Heading";
import { useState } from "react";

export function NotepadCreate() {
  const [titulo, setTitulo] = useState("");

  return (
    <View>
      <form>
        <H1>Notepad List</H1>
        <Text>Novo</Text>
        <TextField
          placeholder="Digite o título"
          value={titulo}
          onChange={() => {
            setTitulo(titulo);
          }}
        />
      </form>
    </View>
  );
}
