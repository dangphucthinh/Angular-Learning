export class LoginResponse {
    access_token: string;
    user: UserReponse;
}

export interface UserReponse {
    id: number;
    username: string;
    email: string;
}

export interface Token {
    nameid: string;
    unique_name: string;
    role: string | string[];
    configuration: string;
}