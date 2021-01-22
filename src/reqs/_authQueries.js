import { gql } from '@apollo/client'

const loginQuery = gql`query Login($username: String){
    user(name: $username) {
        id,
        name,
        pages {
            id,
            title
        },

        boards {
            id,
            title,
            tasks
        }

    }
}`

const regMutation = gql`mutation Register($username: String!){
    addUser(name: $username) {
        id,
        name
    }
}`

export {
    loginQuery,
    regMutation
}

