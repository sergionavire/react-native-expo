import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { apiNotePad } from "../../api/apiNotePad";
import { H1 } from "../components/Heading";
import styled from "styled-components/native";

type NotePadListType = {
  id: number;
  title: string;
  subtitle: string;
};

async function getNotePadList() {
  const res = await apiNotePad.get("/notepads");
  const data = await res.data;
  return data;
}

export function NotepadList() {
  const valorInicial: NotePadListType[] = [];
  const [notepadList, setNotepadList] = useState(valorInicial);
  useEffect(() => {
    getNotePadList().then((notepads) => {
      setNotepadList(notepads);
    });
  }, []);

  return (
    <View>
      <H1>Notepad List</H1>
      <View>
        {notepadList.map((notepad) => {
          return (
            <Notepad key={notepad.id}>
              <Title>
                {notepad.id}: {notepad.title}
              </Title>
              <Subtitle>{notepad.subtitle}</Subtitle>
            </Notepad>
          );
        })}
      </View>
    </View>
  );
}

const Notepad = styled.View`
  display: flex;
  flex-direction: column;
  gap: 5;
  padding: 15px 5px;
  border: 1px solid grey;
`;
const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const Subtitle = styled.Text`
  font-size: 14px;
`;
