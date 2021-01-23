import { gql } from '@apollo/client'

// for some reason nested page requires remapping of data into state
// whereas root updates automatically due to some apollo-magic
const addPageMutationFactory = (username) => (gql`
mutation AddPage($title: String!, $rootID: String){
    addPage(username: "${username}", title: $title, rootID: $rootID) {
        id,
        title,

        pages {
            id,
            title
        },

        boards {
            id,
            title
        }
    }
}`)

const addPageMutationRoot = (username) => (gql`
mutation AddPage($title: String!, $rootID: String){
    addPageRoot(username: "${username}", title: $title, rootID: $rootID) {
        id,
        name,

        pages {
            id,
            title
        },

        boards {
            id,
            title
        }
    }
}`)

export { addPageMutationFactory, addPageMutationRoot }