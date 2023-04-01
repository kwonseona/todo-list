import { loadTodos, saveTodos } from "./todoStorage";

export type TodoType = {
  id: number
  text: string
  isChecked: boolean
}

export type TodoStateType = {
  todos: TodoType[]
}

export type TodoActionType = {
  type: 'add'
  payload: {
    text: string
  }
} | {
  type: 'remove',
  payload: {
    id: number
  }
} | {
  type: 'checked',
  payload: {
    id: number
  }
} | {
  type: 'removeAll'
} | {
  type: 'checkAll'
}

export const initialTodoState = {
  todos: loadTodos()
};

export const todoReducer = (state: TodoStateType, action: TodoActionType) => {
  switch (action.type) {
    case 'add': {
      const newTodos = [...state.todos, {
        id: Date.now(),
        text: action.payload.text,
        isChecked: false
      }]

      saveTodos(newTodos)

      return {
        todos: newTodos
      };
    }
    case 'checked': {
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isChecked: !todo.isChecked
          }
        }

        return todo
      })
      saveTodos(newTodos)

      return {
        todos: newTodos
      };
    }
    case 'checkAll': {
      const isAllChecked = state.todos.every(todo => todo.isChecked)
      const newTodos = state.todos.map(todo => {
        return {
          ...todo,
          isChecked: !isAllChecked
        }
      })

      saveTodos(newTodos)

      return {
        todos: newTodos
      };
    }
    case 'remove': {
      const newTodos = state.todos.filter(todo => {
        return todo.id !== action.payload.id
      })
      saveTodos(newTodos)

      return {
        todos: newTodos
      };
    }
    case 'removeAll':
      saveTodos([])
      return {
        todos: []
      }
    default:
      throw new Error();
  }
}
