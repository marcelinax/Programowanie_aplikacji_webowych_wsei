import { Sign } from "./enums/Sign";

export default class Cell {
  cell: HTMLDivElement;
  sign: Sign | null = null;
  constructor(cell: HTMLDivElement) {
    this.cell = cell;
  }
  setSign(sign: Sign) {
    this.sign = sign;
    switch (sign) {
      case Sign.X:
        this.cell.innerHTML = "X";
        break;
      case Sign.O:
        this.cell.innerHTML = "O";
        break;
    }
  }
}
