import {useEffect, useState} from "react";

export const useLocalStorage = (itemName, initialValue) => {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = JSON.parse(localStorage.getItem(itemName));
                saveItems(localStorageItem ?? initialValue)
                setLoading(false);
            } catch (e) {
                setError(true);
                setLoading(false);
            }

        }, 2000);
    }, [])

    return {item, saveItems, loading, error}
}
