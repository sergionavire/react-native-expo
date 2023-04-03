import { Text, StyleSheet } from "react-native";

type ErrorTextProps = {
  message: string;
  error?: boolean;
};

export function ErrorText(props: ErrorTextProps) {
  return (
    <Text style={styles.ErrorText}>{props.error ? props.message : ""}</Text>
  );
}

const styles = StyleSheet.create({
  ErrorText: {
    color: "#ff0000",
  },
});
