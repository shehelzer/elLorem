interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  // Method to update user email
  updateEmail(newEmail: string): void;

  // Method to update user username
  updateUsername(newUsername: string): void;
}

class UserAccount implements User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, username: string, email: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
    this.updatedAt = new Date();
  }

  updateUsername(newUsername: string): void {
    this.username = newUsername;
    this.updatedAt = new Date();
  }
}
