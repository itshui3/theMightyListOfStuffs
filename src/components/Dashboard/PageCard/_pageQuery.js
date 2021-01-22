import { gql } from '@apollo/client'

const pageQuery = (id) => gql`query Page {

    page(id: "${id}") {

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