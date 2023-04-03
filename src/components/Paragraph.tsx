import { Text, StyleSheet } from "react-native";

type ParagraphProps = {
  children: string;
};

export function Paragraph(props: ParagraphProps) {
  return <Text style={styles.Text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  Text: {
    marginHorizontal: 15,
    marginVertical: 10,
    textAlign: "justify",
  },
});
