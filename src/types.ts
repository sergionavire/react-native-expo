export type NotepadType = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  created_at: string;
  latitude: number | null;
  longitude: number | null;
};

export const initialEmptyNotepad: NotepadType = {
  id: 0,
  created_at: "",
  title: "",
  subtitle: "",
  content: "",
  latitude: null,
  longitude: null,
};
