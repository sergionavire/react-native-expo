// import { Notepad, initialEmptyNotepad } from "../types";

// type NotepadViewProps = {
//   id: string;
//   title: string;
//   subtitle: string;
//   content: string;
//   created_at: string;
//   type: string;
//   latitude: number | null;
//   longitude: number | null;
// };

// export function NotepadView() {
//   return (
//     <FormContainer>
//       <Header>
//         <H1>Notepad: {notepadId}</H1>
//         <DeleteButton
//           onPress={async () => {
//             const { data } = await apiNotePad.delete(`/notepads/${notepadId}`);
//             if (data.success) {
//               Toast.show("Notepad excluído");
//               navigation.navigate(screens.notepadList);
//             } else {
//               Toast.show(data.errors[0].message);
//             }
//           }}
//         >
//           <DeleteText>Excluir</DeleteText>
//         </DeleteButton>
//       </Header>
//       <TextField03
//         placeholder="Título"
//         value={form.title}
//         onChange={(title) => setForm({ ...form, title })}
//       />
//       <TextField
//         placeholder="Subtítulo"
//         value={form.subtitle}
//         onChange={(subtitle) => setForm({ ...form, subtitle })}
//       />
//       <TextField
//         placeholder="Conteúdo"
//         value={form.content}
//         onChange={(content) => setForm({ ...form, content })}
//         multilines={true}
//         numberOfLines={4}
//       />
//       <ButtonsView>
//         <SaveButton
//           onPress={async () => {
//             const { data } = await apiNotePad.put(
//               `/notepads/${notepadId}`,
//               form
//             );
//             console.log(data);
//             console.log("#############");
//             if (data.success) {
//               Toast.show("Notepad salvo!");
//               navigation.navigate(screens.notepadView, {
//                 id: notepadId,
//               });
//             } else {
//               console.log(data.erros.message);
//               Toast.show(data.erros[0].message);
//             }
//           }}
//         >
//           <EditText>Salvar</EditText>
//         </SaveButton>
//       </ButtonsView>
//     </FormContainer>
//   );
// }

// const SaveButton = styled.TouchableOpacity`
//   background-color: green;
//   width: 100%;
//   padding-top: 15px;
//   padding-bottom: 15px;
//   border-radius: 25px;
// `;
// const EditText = styled.Text`
//   text-align: center;
//   color: white;
//   font-weight: 600;
// `;
// const DeleteButton = styled.TouchableOpacity`
//   background-color: red;
//   width: 30%;
//   padding-top: 15px;
//   padding-bottom: 15px;
//   border-radius: 25px;
// `;
// const DeleteText = styled.Text`
//   text-align: center;
//   color: white;
//   font-weight: 600;
// `;
// const Header = styled.View`
//   display: flex;
//   flex-direction: row;
//   gap: 5;
// `;
// const H1 = styled.Text`
//   flex-grow: 1;
//   font-size: 22px;
//   font-weight: bold;
//   vertical-align: middle;
// `;

// const ButtonsView = styled.View`
//   display: flex;
//   flex-direction: row;
//   gap: 5;
// `;

// const FormContainer = styled.View`
//   display: flex;
//   gap: 5px;
//   margin-left: 10px;
//   padding-right: 10px;
// `;
