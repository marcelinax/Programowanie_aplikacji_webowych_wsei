import StandardAccess from "../decorators/StandardAccess";
import User from "./User";

@StandardAccess
export default class StandardUser extends User {
  constructor(name: string, surname: string) {
    super();
    this.name = name;
    this.surname = surname;
  }
}
