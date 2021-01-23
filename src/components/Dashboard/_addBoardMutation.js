import { gql } from '@apollo/client'

const addBoardMutation = gql`
mutation AddBoard($title: String!, $rootID: String!){
    addBoardPage(rootID: $rootID, title: $title) {
        id,
        title,

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

const addBoardMutationRoot = (username) => (gql`
mutation AddBoardRoot($title: String!){
    addBoardRoot(username: "${username}", title: $title) {
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
}`)

export { addBoardMutation, addBoardMutationRoot }