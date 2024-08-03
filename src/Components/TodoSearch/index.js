import './TodoSearch.css';

export function TodoSearch({searchValue, setSearchValue}) {
    return <input
        type="text"
        className='TodoSearch'
        placeholder='Cortar la cebolla'
        value={searchValue}
        onChange={(e) => {
            setSearchValue(e.target.value?.toLowerCase())
        }}/>;
}
