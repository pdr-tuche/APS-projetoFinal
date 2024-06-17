export class User {
  id?: number;
  email: string;
  name: string;
  role: string;
  password: string;

  constructor(email: string, name: string, role: string, password: string) {
    this.email = email;
    this.name = name;
    this.role = role;
    this.password = password;
  }
}
