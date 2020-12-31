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
dummyBoards.push({
    idx: 0,
    title: 'Exercises',
    tasks: [
        {
            name: 'Stretches',
            todos: ['child\'s pose', 'infinity hover']
        }
    ]
})
// [1] diet
dummyBoards.push({
    idx: 1,
    title: 'Dietary Habits',
    tasks: [
        {
            name: 'Drink Plenty of Water!',
            todos: ['Once after morning shower', 'once every 2 hours refill']
        }
    ]
})

// [2]
dummyBoards.push({
    idx: 2,
    title: 'Today\'s Tasks',
    tasks: [
        {
            name: 'Project Work!',
            todos: ['Plan', 'Think about where I\'m at', 'Pick out a piece I can build!']
        }
    ]
})

export { dummyBoards }