import { TodoType } from "./todoReducer"

export const saveTodos = (todos:TodoType[]) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

export const loadTodos = () => {
    const todosString =  localStorage.getItem('todos')

    console.log(todosString)

    if(!todosString) {
        return []
    }

    try {
        return JSON.parse(todosString)
    } catch (e) {
        console.error(e)
        return []
    } 
}