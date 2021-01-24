import { gql } from '@apollo/client'

const updateBoardMutation = gql`
mutation UpdateBoard($username: String!, $pgId: String!, $boardId: String!, $title: String!, $tasks: String!){
    updateBoard(username: $username, pgId: $pgId, boardId: $boardId, title: $title, tasks: $tasks) {
        id,
        title,
        tasks
    }
}`

export { updateBoardMutation }