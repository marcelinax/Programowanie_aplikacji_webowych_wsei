import Note from "./Note";
import { NoteStorage } from "./NoteStorage";

export default class SessionStorage implements NoteStorage {
  saveNotes(notes: Note[]): void {
    sessionStorage.setItem("notes", JSON.stringify(notes));
  }
  getNotes(): Note[] {
    return JSON.parse(sessionStorage.getItem("notes") || "[]");
  }
}
