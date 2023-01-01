import IUser from "./user.model";

export default interface IDbUser extends Omit<IUser, 'password'>{

}
