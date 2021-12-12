import Users from '../../db.json'

interface IUser {
  name?: string
}

function regexName(name: string, words: string[]): boolean {
  const regex = new RegExp(`(?:${words.join('|')})`, 'gi')
  return name.match(regex) !== null
}

const resolvers = {
  Query: {
    list: (_: void, { name }: IUser) => {
      if (name) {
        const words = name.split(' ') ?? []
        return Users.filter((user) => regexName(user.name, words))
      }
      return Users
    }
  }
}

export { resolvers }
