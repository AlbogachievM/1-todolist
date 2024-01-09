import { FC, useState } from 'react';
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
    removeTask: (id: number) => void
}

export const TodoList: FC<PropsType> = ({ title, tasks, removeTask }) => {

    let [filter, setFilter] = useState<FilterValueType>("All");
    const ChangedFilter = (value: FilterValueType) => {
        setFilter(value);
    };

    let tasksForTodolist: TaskType[] = filter === 'Active'
        ? tasks.filter((t) => !t.isDone)
        : filter === 'Completed'
            ? tasks.filter(t => t.isDone)
            : tasks

    const tasksItems: JSX.Element = tasksForTodolist.length !== 0
        ? <ul>
            {tasks.map((t) => {
                return (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} />
                        <span>{t.title}</span>
                        <Button title='x' onClickHandler={() => removeTask(t.id)} />
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
                <Button title='+' onClickHandler={() => { }} />
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <Button onClickHandler={() => ChangedFilter('All')} title='All' />
                <Button onClickHandler={() => ChangedFilter('Active')} title='Active' />
                <Button onClickHandler={() => ChangedFilter('Completed')} title='Completed' />
            </div>
        </div>
    );
};
// onClick={()=> ChangedFilter('All')}



