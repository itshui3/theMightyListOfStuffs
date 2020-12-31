const dummyPages = {
    pages: [],
    boards: []
}

const healthPages = {
    title: 'Health',
    pages: [],
    boards: [
        { idx: 0, title: 'Exercises'},
        { idx: 1, title: 'Diet' }
    ]
}
dummyPages.pages.push(healthPages)

const projectPages = {
    title: 'Projects',
    pages: [],
    boards: []
}
dummyPages.pages.push(projectPages)

const learningPages = {
    title: 'Prog',
    pages: [],
    boards: []
}
dummyPages.pages.push(learningPages)

const todayTodoBoard = { idx: 2, title: 'Today\'s Tasks' }
dummyPages.boards.push(todayTodoBoard)

export { dummyPages }