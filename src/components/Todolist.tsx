import { FC } from 'react';
import Button from './Button';
import { FilterValueType } from '../App';


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number)=> void
    ChangedFilter: (value: FilterValueType)=> void
}

export const TodoList: FC<PropsType> = ({ title, tasks, removeTask, ChangedFilter }) => {


    const tasksItems: JSX.Element = tasks.length !== 0
        ? <ul>
            {tasks.map((t) => {
                return (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} />
                        <span>{t.title}</span>
                        <button onClick={() => { removeTask(t.id) }}>x</button>
                    </li>
                )
            })}
        </ul>
        : <span>No tasks</span>

    return (
        <div className='todolist'>
            <h3>{title}</h3>
            <div>
                <input />
                <Button title='+' />
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button onClick={()=> ChangedFilter('All')}>All</button>
                <button onClick={()=> ChangedFilter('Active')}>Active</button>
                <button onClick={()=> ChangedFilter('Completed')}>Completed</button>
            </div>
        </div>
    );
};



 