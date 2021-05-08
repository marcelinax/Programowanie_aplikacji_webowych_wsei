import Note from "./Note";

export interface NoteStorage {
  saveNotes(notes: Note[]): void;
  getNotes(): Note[];
}
