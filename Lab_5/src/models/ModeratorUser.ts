import ModeratorAccess from "../decorators/ModeratorAccess";
import User from "./User";

@ModeratorAccess
export default class ModeratorUser extends User {
  constructor(name: string, surname: string) {
    super();
    this.name = name;
    this.surname = surname;
  }
}
