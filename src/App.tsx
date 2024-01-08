import React, { useState } from 'react';
import './App.css';
import { TaskType, TodoList } from './components/TodoList';

export type FilterValueType = 'All' | 'Completed' | 'Active';

function App() {

    let [tasks, setTask] = useState<Array<TaskType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Rest API", isDone: false },
        { id: 5, title: "GraphQL", isDone: false },
    ]
    )
    let [filter, setFilter] = useState<FilterValueType>('All')

    function removeTask(id: number) {
        let filtredTasks = tasks.filter(t => t.id !== id)
        setTask(filtredTasks)
    }

   const ChangedFilter =(value: FilterValueType)=> {
        setFilter(value)
    }

    let tasksForTodolist = tasks;
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter((t) => t.isDone === true)
    }
    if (filter === 'Active') {
        tasksForTodolist = tasks.filter((t) => t.isDone === true)
    }
    return (
        <div className="App">
            <TodoList
                title='What to read?'
                tasks={tasksForTodolist}
                removeTask={removeTask}
                ChangedFilter ={ChangedFilter}
            />
        </div>
    );
}



export default App;
