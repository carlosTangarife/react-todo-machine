import {TodoCounter} from "../Components/TodoCounter";
import {TodoSearch} from "../Components/TodoSearch";
import {TodoList} from "../Components/TodoList";
import {TodoItem} from "../Components/TodoItem";
import {CreateTodoButton} from "../Components/CreateTodoButton";
import {EmptyTodos} from "../Components/EmptyTodos";
import {TodosError} from "../Components/TodosError";
import {TodosLoading} from "../Components/TodosLoading";
import {TodoContext} from "../Components/TodoContext";

export const AppUi = () => (
    <>
        <TodoCounter/>
        <TodoSearch/>

        <TodoContext.Consumer>
            {({
                  searchedTodos,
                  completeTodo,
                  deleteTodo,
                  isLoading,
                  isError
              }) => (
                <TodoList>
                    {isLoading && <>
                        <TodosLoading/>
                        <TodosLoading/>
                        <TodosLoading/>
                    </>}
                    {isError && <TodosError/>}
                    {!isLoading && searchedTodos.length === 0 && <EmptyTodos/>}

                    {searchedTodos?.map((todo) => <TodoItem
                        key={todo.id}
                        {...todo}
                        completeTodo={() => completeTodo(todo.id)}
                        deleteTodo={() => deleteTodo(todo.id)}
                    />)}
                </TodoList>
            )}
        </TodoContext.Consumer>

        <CreateTodoButton/>
    </>)
