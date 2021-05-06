import AdminAccess from "../decorators/AdminAccess";
import User from "./User";

@AdminAccess
export default class AdminUser extends User {
  constructor(name: string, surname: string) {
    super();
    this.name = name;
    this.surname = surname;
  }
}
