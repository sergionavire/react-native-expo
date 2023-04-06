import { Text } from "react-native";

type TextDataProps = {
  children: string;
};

export function TextData(props: TextDataProps) {
  return <Text>{new Date(props.children).toLocaleDateString()}</Text>;
}
