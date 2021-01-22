import { gql } from '@apollo/client'

const pageQuery = gql`query Page($id: String) {

    page(id: $id) {

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

export { pageQuery }