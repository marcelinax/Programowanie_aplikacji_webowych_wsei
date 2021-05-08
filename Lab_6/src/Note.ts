export default class Note {
  title: string;
  content: string;
  date: Date;
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.date = new Date();
  }

  renderNote(): void {
    const parentEl = document.querySelector(".notes-box");
    const noteEl = document.createElement("div");
    noteEl.innerHTML = `
      <h1 class="title">${this.title}</h1>
      <p class="content">${this.content}</p>
      <p class="date">${this.date.toLocaleDateString()}</p>
      <button class="delete"></button>
    `;
    parentEl.appendChild(noteEl);
  }
}
