import { Sign } from "../enums/Sign";

export default class Move {
  index: number;
  sign: Sign;

  constructor(index: number, sign: Sign) {
    this.index = index;
    this.sign = sign;
  }
}
