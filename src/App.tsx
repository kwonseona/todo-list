import React from 'react';
import './App.css';
import TodoList from "./List/TodoList";
import TodoInput from "./Input/TodoInput";
import TodoHeader from "./Header/TodoHeader";
import Divider from "./Divider/Divider";
import { TodoProvider } from "./Todo/TodoProvider";
import TodoTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';

function App() {
  return (
    <main className="App">
      <TodoProvider>
        <TodoHeader />
        <TodoInput />
        <TodoListArea>
          <TodoTools />
          <Divider />
          <TodoList />
        </TodoListArea>
      </TodoProvider>
    </main>
  );
}

export default App;
