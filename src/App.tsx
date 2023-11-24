import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValueType = 'All'| 'Active' | 'Completed'

function App() {

    const title='What to learn'
    const [filter, setFilter] = useState<FilterValueType>('All')

    const [tasks, setTask] = useState ([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    const removeTask = (id:number)=>{
        setTask(tasks.filter(el=>el.id!==id))
    }

    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    let taskForTodolist=tasks

    if(filter==='Active'){
        taskForTodolist = tasks.filter(t=>!t.isDone)
    }

    if(filter==='Completed'){
        taskForTodolist = tasks.filter(t=>t.isDone)
    }

    return (
        <div className="App">
            <Todolist title={title}
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
