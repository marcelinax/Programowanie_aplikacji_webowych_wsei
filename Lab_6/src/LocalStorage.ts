import Note from "./Note";
import { NoteStorage } from "./NoteStorage";

export default class LocalStorage implements NoteStorage {
  constructor() {}

  saveNotes(notes: Note[]): void {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  getNotes(): Note[] {
    const notesShapes = <Note[]>(
      JSON.parse(localStorage.getItem("notes") || "[]")
    );
    return notesShapes.map((nS) => new Note(nS.title, nS.content));
  }
}
