import { gql } from '@apollo/client'

const pageQueryFactory = (username) => (gql`query Page($id: [Int]) {
    user(name: "${username}") {
        id,
        name,
        page(id: $id) {

            pages {
                id,
                title
            },

            boards {
                title,
                tasks
            }

        }
    }
}`)

export { pageQueryFactory }