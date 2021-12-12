export interface IUserRepository {
  _id: string;
  picture: string;
  name: string;
  age: number;
  eyeColor: string;
  company: string;
  email: string;
  friends: [IUserRepository];
}
