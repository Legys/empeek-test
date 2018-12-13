import { INote } from "src/components/main/Notes/types";

export const deleteNoteById = (id: string): INote => {
  const storedNotes: INote[] = JSON.parse(localStorage.getItem("notes"));

  if (storedNotes) {
    const noteIndex: number = storedNotes.findIndex(
      (note: INote) => note.id === id
    );
    if (noteIndex) {
      const deletedNote: INote[] = storedNotes.splice(noteIndex, 1);
      localStorage.setItem("notes", JSON.stringify(storedNotes));
      return deletedNote[0];
    }
    return null;
  }
  return null;
};
