import { Role } from "../enums/Roles";

export default function AdminAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Admin;
}
