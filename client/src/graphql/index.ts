import { gql } from "@apollo/client";

export const GET_LIST = gql`
  query Users {
    list {
      _id
      picture
      age
      name
      eyeColor
      company
      email
      friends {
        _id
        picture
        age
        name
        eyeColor
        company
        email
      }
    }
  }
`;
export const GET_LIST_SEARCH = gql`
  query Users($name: String!) {
    list(name: $name) {
      _id
      picture
      age
      name
      eyeColor
      company
      email
      friends {
        _id
        picture
        age
        name
        eyeColor
        company
        email
      }
    }
  }
`;
