const dummyPages = {
    pages: [],
    boards: []
}

const healthPages = {
    pages: [],
    boards: [
        { idx: 0, title: 'Exercises'},
        { idx: 1, title: 'Diet' }
    ]
}
dummyPages.pages.push(healthPages)

const projectPages = {
    pages: [],
    boards: []
}
dummyPages.pages.push(projectPages)

const learningPages = {
    pages: [],
    boards: []
}
dummyPages.pages.push(learningPages)

const todayTodoBoard = { idx: 3, title: 'Today\'s Tasks' }
dummyPages.boards.push(todayTodoBoard)

export { dummyPages }