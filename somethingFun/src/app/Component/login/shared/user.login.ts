export class UserLogin {
    username: string;
    password: string;

    constructor(username?: string, password?: string) {
        this.username = username as string;
        this.password = password as string;
    }
}

