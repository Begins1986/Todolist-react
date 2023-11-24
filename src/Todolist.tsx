import React from 'react';
import {FilterValueType} from "./App";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id:number)=>void
    changeFilter: (value: FilterValueType)=> void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {/*<li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*/}
                {/*<li><input type="checkbox" checked={true}/> <span>JS</span></li>*/}
                {/*<li><input type="checkbox" checked={false}/> <span>React</span></li>*/}

                {props.tasks.map(el => <li key={el.id}>
                    <button onClick={()=>(props.removeTask(el.id))}>x</button>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span></li>)}
            </ul>
            <div>
                <button onClick={()=>props.changeFilter('All')}>All</button>
                <button onClick={()=>props.changeFilter('Active')}>Active</button>
                <button onClick={()=>props.changeFilter('Completed')}>Completed</button>
            </div>
        </div>
    );
};

