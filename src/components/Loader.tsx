import styled from "styled-components";
import { ActivityIndicator } from "react-native";

const Backdrop = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff0f9aa;
`;

export type LoaderProps = {
  loading: boolean;
};

export function Loader(props: LoaderProps) {
  if (props.loading) {
    return (
      <Backdrop>
        <ActivityIndicator size={72} />
      </Backdrop>
    );
  } else {
    return null;
  }
}
