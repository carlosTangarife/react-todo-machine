import {AppUi} from "./AppUi";
import {TodoProvider} from "../Components/TodoContext";

export const App = () => (
    <TodoProvider>
        <AppUi/>
    </TodoProvider>

)
