export class User {
    public id: string;
    public username: string;
    public email: string;
    public groupRole: string;
  
    constructor(id?: string, username?: string, email?: string, groupRole?: string) {
      this.id = id as string;
      this.username = username as string;
      this.email = email as string;
      this.groupRole = groupRole as string;
    }
  }
  
  export class UserForList {
    public id: string;
    public username: string;
    public email: string;
    public groupRole: string;
  
    constructor(id?: string, username?: string, email?: string, groupRole?: string) {
      this.id = id as string;
      this.username = username as string;
      this.email = email as string;
      this.groupRole = groupRole as string;
    }
  }
  
  export class UserSave {
    public id: string;
    public username: string;
    public email: string;
    public groupRole: string;
    public roles: string[];
  
    constructor(id?: string, username?: string, email?: string, groupRole?: string, roles?: string[]) {
      this.id = id as string;
      this.username = username as string;
      this.email = email as string;
      this.groupRole = groupRole as string;
      this.roles = roles as string[];
    }
  }
  
  