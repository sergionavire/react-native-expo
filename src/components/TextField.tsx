import { TextInput, StyleSheet } from "react-native";
import styled from "styled-components";

type TextFieldProps = {
  placeholder: string;
  value: string;
  multilines?: boolean;
  numberOfLines?: number;
  onChange: (text: string) => void;
};

export function TextField(props: TextFieldProps) {
  return (
    <TextInput
      style={styles.TextField}
      placeholder={props.placeholder}
      multiline={props.multilines === true ? true : false}
      numberOfLines={props.multilines === true ? props.numberOfLines : 1}
      value={props.value}
      onChangeText={(text) => props.onChange(text)}
    />
  );
}

const styles = StyleSheet.create({
  TextField: {
    fontSize: 18,
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#626263",
    borderRadius: 20,
    color: "#000",
    width: "90%",
    textAlignVertical: "top",
    paddingTop: 10,
    paddingLeft: 15,
  },
});
