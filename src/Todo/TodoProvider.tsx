import {createContext, Dispatch, ReactNode, Reducer, useContext, useReducer} from "react";
import {initialTodoInputState, TodoInputActionType, todoInputReducer, TodoInputStateType} from "./todoInputReducer";
import {initialTodoState, TodoActionType, todoReducer, TodoStateType} from "./todoReducer";

interface TodoProviderProps {
  children: ReactNode
}

const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(null);
const InputTodoContext = createContext<TodoInputStateType | null>(null);
const InputTodoDispatchContext = createContext<Dispatch<TodoInputActionType> | null>(null);

export const TodoProvider = (props:TodoProviderProps) => {
  const [todoState, todoDispatch] = useReducer<Reducer<TodoStateType, TodoActionType>>(todoReducer, initialTodoState);
  const [inputState, inputDispatch] = useReducer<Reducer<TodoInputStateType, TodoInputActionType>>(todoInputReducer, initialTodoInputState)

  console.log(todoState)

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
          {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export const useTodoState = () => {
  const val = useContext(TodoStateContext);

  if(!val) {
    throw new Error('Cannot find useTodoState');
  }

  return val
}

export const useTodoDispatch = () => {
  const val = useContext(TodoDispatchContext);


  if(!val) {
    throw new Error('Cannot find useTodoDispatch');
  }

  return val
}

export const useInputTodoState = () => {
  const val = useContext(InputTodoContext);


  if(!val) {
    throw new Error('Cannot find useInputTodoState');
  }

  return val
}

export const useInputTodoDispatch = () => {
  const val = useContext(InputTodoDispatchContext);

  if(!val) {
    throw new Error('Cannot find useInputTodoDispatch');
  }

  return val
}
