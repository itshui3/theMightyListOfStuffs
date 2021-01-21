import { gql } from '@apollo/client'

// as there's already a query on expanded page
// return data from this query shouldn't be as important
const addPageMutationFactory = (username) => (gql`
mutation AddPage($title: String!, $rootID: String){
    addPage(username: "${username}", title: $title, rootID: $rootID) {
        id,
        title
    }
}`)

export { addPageMutationFactory }

// const addPageMutationFactory = (username) => (gql`
// mutation AddPage($title: String!, $rootID: String){
//     addPage(username: "${username}", title: $title, rootID: $rootID) {
//         id,
//         name,
//         pages {
//             id,
//             title
//         },

//         boards {
//             id,
//             title,
//             tasks
//         }

//     }
// }`)