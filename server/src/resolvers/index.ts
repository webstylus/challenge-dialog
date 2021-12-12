import Users from "../database/db.json";

interface IUser {
  _id?: string;
  name?: string;
}

function regexName(name: string, words: string[]): boolean {
  const regex = new RegExp(`(?:${words.join("|")})`, "gi");
  return name.match(regex) !== null;
}

const resolvers = {
  Query: {
    list: (_: void, { name }: IUser) => {
      if (name) {
        const words = name.split(" ") ?? [];
        return Users.filter((user) => regexName(user.name, words));
      }
      return Users;
    },
    findById: (_: void, { _id }: IUser) => {
      return Users.filter((user) => user._id === _id);
    },
  },
};

export { resolvers };
