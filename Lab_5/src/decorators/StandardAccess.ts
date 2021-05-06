import { Role } from "../enums/Roles";

export default function StandardAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Standard;
}
