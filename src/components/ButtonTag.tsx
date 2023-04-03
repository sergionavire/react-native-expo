import { StyleSheet, Button } from "react-native";
type ButtonTagProps = {
  title: string;
  onPress: () => void;
};

export function ButtonTag(props: ButtonTagProps) {
  return <Button color="green" title={props.title} onPress={props.onPress} />;
}
