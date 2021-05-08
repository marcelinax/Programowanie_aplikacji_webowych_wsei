import Note from "./Note";
import { NoteStorage } from "./NoteStorage";

export default class Notes {
  storage: NoteStorage;
  notes: Note[];
  constructor(storage: NoteStorage) {
    this.storage = storage;
    this.notes = this.storage.getNotes();
    this.initCreateNote();
    this.renderNotes();
  }

  initCreateNote(): void {
    document.getElementById("create-note-btn").addEventListener("click", () => {
      this.createNote();
    });
  }

  initDeleteNotes(): void {
    document.querySelectorAll(".delete").forEach((el, index) =>
      el.addEventListener("click", () => {
        this.deleteNote(index);
      })
    );
  }

  createNote(): void {
    const titleEl = <HTMLInputElement>document.getElementById("title");
    const contentEl = <HTMLInputElement>document.getElementById("content");
    const note = new Note(titleEl.value, contentEl.value);
    this.notes.push(note);
    this.storage.saveNotes(this.notes);
    titleEl.value = "";
    contentEl.value = "";
    this.renderNotes();
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.storage.saveNotes(this.notes);
    this.renderNotes();
  }

  renderNotes(): void {
    document.querySelector(".notes-box").innerHTML = "";
    this.notes.forEach((n) => n.renderNote());
    this.initDeleteNotes();
  }
}
