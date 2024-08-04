import {TodoCounter} from "../Components/TodoCounter";
import {TodoSearch} from "../Components/TodoSearch";
import {TodoList} from "../Components/TodoList";
import {TodoItem} from "../Components/TodoItem";
import {CreateTodoButton} from "../Components/CreateTodoButton";
import {EmptyTodos} from "../Components/EmptyTodos";
import {TodosError} from "../Components/TodosError";
import {TodosLoading} from "../Components/TodosLoading";
import {TodoContext} from "../Components/TodoContext";
import {useContext} from "react";
import {Modal} from "../Components/Modal";
import {TodoForm} from "../Components/TodoForm";

export const AppUi = () => {
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        isLoading,
        isError,
        openModal,
    } = useContext(TodoContext);

    return (
        <>
            <TodoCounter/>
            <TodoSearch/>

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

            <CreateTodoButton/>

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </>)
}
