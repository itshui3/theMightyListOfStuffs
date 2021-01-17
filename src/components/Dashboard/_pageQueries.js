import { gql } from '@apollo/client'

const addPageMutationQuery = gql`
mutation AddPage(
    $username: String!, 
    $title: String!, 
    $rootID: String
    ){
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

export { addPageMutationQuery }