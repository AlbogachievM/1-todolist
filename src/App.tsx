import React from 'react';
import './App.css';
import { Todolist } from './components/Todolist';




function App() {
    return (
        <div className="App">
            <Todolist title='What to learn?'/>
            <Todolist title='Song'/>
            <Todolist title='Books'/>
        </div>
    );
}



export default App;
