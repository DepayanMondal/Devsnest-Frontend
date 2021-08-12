import React from 'react'
export interface TodoListProps{
    todo:string,
    done:boolean
}

const ToDoList = ({todo,done}:TodoListProps) => {
    return (
        <div className="todolist">
            <h2>{todo}</h2>
        </div>
    )
}

export default ToDoList
