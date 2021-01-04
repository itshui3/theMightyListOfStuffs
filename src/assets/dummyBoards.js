const dummyBoards = []

// ex. 
// const dummyEx = {
//     title: 'dummyBoards',
//     tasks: [
//         { 
//             name: 'Clean', 
//             todos: ['take out trash', 'wipe  floor'] 
//         },
//         { 
//             name: 'Code', 
//             todos: ['build tasklist', 'figure out how to drag drop'] 
//         }
//     ]
// }

// [0] exercises
const exerciseBoard = {

    title: 'Exercises',
    tasks: [
        {
            name: 'Stretches',
            todos: ['child\'s pose', 'infinity hover']
        }
    ]
}
// [1] diet
const dietBoard = {

    title: 'Dietary Habits',
    tasks: [
        {
            name: 'Drink Plenty of Water!',
            todos: ['Once after morning shower', 'once every 2 hours refill']
        }
    ]
}

// [2]
const taskBoard = {

    title: 'Today\'s Tasks',
    tasks: [
        {
            name: 'Project Work!',
            todos: ['Plan', 'Think about where I\'m at', 'Pick out a piece I can build!']
        }
    ]
}

// [3] nested in health_resources
const dietLinksBoard = {

    title: 'Diet Links',
    tasks: []
}

export { exerciseBoard, dietBoard, taskBoard, dietLinksBoard }