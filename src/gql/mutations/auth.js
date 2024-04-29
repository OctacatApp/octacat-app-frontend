import { gql } from 'urql';

/**
 * !tanyakan tentang auth
 */

const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        auth {
            login (param: {
                email: $email,
                password: $password
            }) {
                message
                token
            }
        }
    }
`;

const REGISTER = gql`
mutation register($name: String!, $email: String!, $password: String!) {
    auth {
        register (param: {
            name: $name,
            email: $email,
            password: $password
        }) {
            id
            name
            email
            password
        }
    }
}
`;

export { REGISTER, LOGIN };
