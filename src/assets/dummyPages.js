import { 
    exerciseBoard, 
    dietBoard, 
    taskBoard, 
    dietLinksBoard 
} from './dummyBoards.js'

const dummyPages = {
    title: 'Root',
    pages: [],
    boards: []
}

const healthPages = {
    title: 'Health',
    pages: [],
    boards: [
        exerciseBoard,
        dietBoard
    ]
}
const healthPages_resources = {
    title: 'Healthy Resources',
    pages: [],
    boards: [ dietLinksBoard ]
}
healthPages.pages.push(healthPages_resources)
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

// root level pages
dummyPages.boards.push(taskBoard)

export { dummyPages }