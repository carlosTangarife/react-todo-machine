import {createContext, useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const {item: todos, saveItems: saveTodos, loading: isLoading, error: isError} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const searchedTodos = todos?.filter((todo) => todo.title.toLowerCase().includes(searchValue));

    const completeTodo = (key) => {
        const newTodos = [...todos];
        const indexTodo = todos?.findIndex((todo) => todo.id === key);
        newTodos[indexTodo].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (key) => {
        const newTodos = todos?.filter((todo) => todo.id !== key);
        saveTodos(newTodos);
    }

    const totalTodos = todos?.length;
    const totalCompleted = todos?.filter(todo => todo.completed).length
    const totalFinished = totalTodos === totalCompleted;

    return (
        <TodoContext.Provider value={{
            totalTodos,
            totalCompleted,
            totalFinished,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            isLoading,
            isError,
        }}>
            {children}
        </TodoContext.Provider>
    )
}
