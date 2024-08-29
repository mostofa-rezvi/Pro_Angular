import { UserModel } from "./user.model";

export interface Authresponse {
    token: string;
    user: UserModel;
}
