import {TodoCounter} from "../Components/TodoCounter";
import {TodoSearch} from "../Components/TodoSearch";
import {TodoList} from "../Components/TodoList";
import {TodoItem} from "../Components/TodoItem";
import {CreateTodoButton} from "../Components/CreateTodoButton";

export const AppUi = ({todos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo}) => (
    <>
        <TodoCounter
            total={todos.length}
            completed={todos.filter(todo => todo.completed).length}
            finished={todos.length === todos.filter(todo => todo.completed).length}
        />

        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        <TodoList>
            {
                searchedTodos.map((todo) =>
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        completeTodo={() => completeTodo(todo.id)}
                        deleteTodo={() => deleteTodo(todo.id)}
                    />)}
        </TodoList>

        <CreateTodoButton/>
    </>
)
