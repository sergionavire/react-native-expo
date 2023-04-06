import styled from "styled-components";

export const SaveButton = styled.TouchableOpacity`
  background-color: green;
  width: 30%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 25px;
`;
export const ButtonEdit = styled.TouchableOpacity`
  background-color: green;
  width: 30%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 25px;
`;

export const EditText = styled.Text`
  text-align: center;
  color: white;
  font-weight: 600;
`;
export const DeleteButton = styled.TouchableOpacity`
  background-color: red;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 25px;
  margin-top: 35px;
`;
export const DeleteText = styled.Text`
  text-align: center;
  color: white;
  font-weight: 600;
`;
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
export const H1 = styled.Text`
  flex-grow: 1;
  font-size: 22px;
  font-weight: bold;
  vertical-align: middle;
`;

export const ButtonsView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const FormContainer = styled.ScrollView`
  display: flex;
  gap: 5px;
  margin-left: 10px;
  padding-right: 10px;
`;
