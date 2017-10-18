import data from './data.json';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    me: [Contact]
  }

  type Contact {
    id: String
    age: Int
    name: String
    gender: String
    company: String
    email: String
    phone: String
    address: String
    friends: [Friend]
  }

  type Friend {
      id: Int
      name: String
  }
`);

const root = {
  me: () => {
    return data;
  }
};

export { data, root, schema }