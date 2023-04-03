import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

type HeadingProps = {
  children: string;
};
export function Heading(props: HeadingProps) {
  return <Text style={styles.Heading}>{props.children}</Text>;
}

// export const H1Novo = styled.Heading``

const styleDefault = `font-weight: bold;
padding: 20px 5px;`;

export const H1 = styled.Text`
  font-size: 22px;
  ${styleDefault}
`;

export const H2 = styled.Text`
  font-size: 20px;
  ${styleDefault}
`;

export const H3 = styled.Text`
  font-size: 18px;
  ${styleDefault}
`;

export const H4 = styled.Text`
  font-size: 16px;
  ${styleDefault}
`;

export const H5 = styled.Text`
  font-size: 14px;
  ${styleDefault}
`;

export const H6 = styled.Text`
  font-size: 12px;
  ${styleDefault}
`;

const styles = StyleSheet.create({
  Heading: {
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
