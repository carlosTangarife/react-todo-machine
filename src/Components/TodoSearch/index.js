import './TodoSearch.css';
import {useContext} from "react";
import {TodoContext} from "../TodoContext";

export function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);

    return <input
        type="text"
        className='TodoSearch'
        placeholder='Cortar la cebolla'
        value={searchValue}
        onChange={(e) => {
            setSearchValue(e.target.value?.toLowerCase())
        }}/>;
}
