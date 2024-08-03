import {useState} from "react";

export const useLocalStorage = (itemName, initialValue) => {
    const parsedItems = JSON.parse(localStorage.getItem(itemName)) || initialValue;
    const [item, setItem] = useState(parsedItems);

    const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [item, saveItems]
}
