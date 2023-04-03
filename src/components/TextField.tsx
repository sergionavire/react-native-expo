import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

type TextFieldProps = {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
};

export function TextField(props: TextFieldProps) {
  return (
    <TextInput
      style={styles.TextField}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={(text) => props.onChange(text)}
    />
  );
}

const styles = StyleSheet.create({
  TextField: {
    fontSize: 18,
    padding: 5,
    color: "blue",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#0000ff",
    width: "90%",
  },
});
