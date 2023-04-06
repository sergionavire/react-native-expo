import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { ButtonTag } from "../components/ButtonTag";
import { TextField } from "../components/TextField";
import { Paragraph } from "../components/Paragraph";
import { H1, H2, H3, H4, H5, H6 } from "../components/Heading";
import { ErrorText } from "../components/ErrorText";

export function Exercise02() {
  const [textInput, setTextInput] = useState("");
  return (
    <View>
      <Text>Hello world!</Text>
      <ButtonTag
        title="Clique aqui"
        onPress={() => {
          Alert.alert("Obrigado");
        }}
      />
      <TextField
        placeholder="Digite aqui"
        value={textInput}
        onChange={(text) => {
          setTextInput(text);
        }}
      />
      <Paragraph>
        Esse é parágrafo para mostar que esse componente pode ser utilizado
        quantas vezes quiser.
      </Paragraph>
      <Paragraph>
        E esse é o segundo parágrafo para mostar que esse componente pode ser
        utilizado quantas vezes quiser.
      </Paragraph>
      <Paragraph>
        E esse é o segundo parágrafo para mostar que esse componente pode ser
        utilizado quantas vezes quiser.
      </Paragraph>
      <H1>Esse é o H1</H1>
      <H2>Esse é o H2</H2>
      <H3>Esse é o H3</H3>
      <H4>Esse é o H4</H4>
      <H5>Esse é o H5</H5>
      <H6>Esse é o H6</H6>
      <ErrorText message="Erro teste" error />
    </View>
  );
}
