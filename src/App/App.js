import {useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {AppUi} from "./AppUi";

export const App = () => {
    const {item: todos, saveItems: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
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

    return <AppUi
        totalTodos={totalTodos}
        completed={totalCompleted}
        totalFinished={totalFinished}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        isLoading={loading}
        isError={error}
    />
}
