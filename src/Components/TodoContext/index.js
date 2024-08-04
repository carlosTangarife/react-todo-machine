import {createContext, useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const {item: todos, saveItems: saveTodos, loading: isLoading, error: isError} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
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

    const addTodo = (title) => {
        const newTodos = [
            ...todos,
            {
                title: title,
                completed: false,
                id: title,
            }
        ];

        saveTodos(newTodos);
    }

    const totalTodos = todos?.length;
    const totalCompleted = todos?.filter(todo => todo.completed).length
    const totalIsFinished = totalTodos === totalCompleted;

    return (
        <TodoContext.Provider value={{
            totalTodos,
            totalCompleted,
            totalIsFinished,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            isLoading,
            isError,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}
