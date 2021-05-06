import { ForAdmin } from "../decorators/forAdmin";
import { ForModerator } from "../decorators/forModerator";
import { Role } from "../enums/Roles";

export default class User {
  name: string;
  surname: string;
  role: Role;

  toString(): string {
    return `${this.name} ${this.surname} ${this.role}`;
  }
}
