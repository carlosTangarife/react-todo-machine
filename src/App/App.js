import {useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {AppUi} from "./AppUi";

export const App = () => {
    const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const searchedTodos = todos.filter((todo) => todo.title.toLowerCase().includes(searchValue));

    const completeTodo = (key) => {
        const newTodos = [...todos];
        const indexTodo = todos.findIndex((todo) => todo.id === key);
        newTodos[indexTodo].completed = true;
        setTodos(newTodos);
    }

    const deleteTodo = (key) => {
        const newTodos = todos.filter((todo) => todo.id !== key);
        setTodos(newTodos);
    }

    return <AppUi
        todos={todos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
    />
}
