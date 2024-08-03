import {TodoCounter} from "../Components/TodoCounter";
import {TodoSearch} from "../Components/TodoSearch";
import {TodoList} from "../Components/TodoList";
import {TodoItem} from "../Components/TodoItem";
import {CreateTodoButton} from "../Components/CreateTodoButton";
import {EmptyTodos} from "../Components/EmptyTodos";
import {TodosError} from "../Components/TodosError";
import {TodosLoading} from "../Components/TodosLoading";

export const AppUi = ({
                          totalTodos,
                          totalCompleted,
                          totalFinished,
                          searchValue,
                          setSearchValue,
                          searchedTodos,
                          completeTodo,
                          deleteTodo,
                          isLoading,
                          isError
                      }) => (<>
    <TodoCounter
        total={totalTodos}
        completed={totalCompleted}
        finished={totalFinished}
    />

    <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
    />

    <TodoList>
        {isLoading && <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
        </>}
        {isError && <TodosError />}
        {!isLoading && searchedTodos.length === 0 && <EmptyTodos />}

        {searchedTodos?.map((todo) => <TodoItem
            key={todo.id}
            {...todo}
            completeTodo={() => completeTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
        />)}
    </TodoList>

    <CreateTodoButton/>
</>)
