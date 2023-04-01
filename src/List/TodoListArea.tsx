import {useTodoState} from "../Todo/TodoProvider";
import { ReactNode } from 'react';

interface TodoListAreaProps {
  children: ReactNode
}

const TodoListArea = (props:TodoListAreaProps) => {
  const todoState = useTodoState();

  if(todoState.todos.length < 1) {
    return null
  }

  return <>{props.children}</>
}

export default TodoListArea
