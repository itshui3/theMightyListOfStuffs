import { useState } from 'react'

const useTaskList = (initState) => {

    const [taskList, setTaskList] = useState(() => {
        if (initState !== null && initState.length > 0) {
            return initState
        } else {
            return []
        }
    })

    const addTodo = (taskID, todo) => {

        if ( todo.length <= 0 ) { return }

        // add nested Todo
        setTaskList((tList) => {

            for (let i=0; i < tList.length; i++) {
                if (tList[i].id === taskID) {
                    const modTask = {...tList[i]}

                    modTask.todos.push(todo)

                    return [
                        tList.splice,
                        modTask
                    ]
                }
            }

            // return next state
        })

    }

}