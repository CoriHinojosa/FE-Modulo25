import "./styles.css";
import { useState } from "react";
import FilteredList from "../FilteredList"
import Main, { arrowMovies } from "../Main";


const SearchBox = () => {
    const [ data, setData ] = useState({
        search: '',
    });

    const [ movie, setMovie ] = useState("");

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,            
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovie(data.search);
    }

    if(movie.length > 0) {
    return (
            <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    value={data.search} 
                    type="text" name="search" 
                    placeholder="Filtrar películas..." 
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit" name="btnSearch">Buscar</button>
            </form>
            <FilteredList movieList={arrowMovies(data.search.toLowerCase())}/>;
            </>
            )
    } else {
    return (
            <>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input 
                        value={data.search} 
                        type="text" name="search" 
                        placeholder="Filtrar películas..." 
                        onChange={(e) => handleChange(e)}
                    />
                    <button type="submit" name="btnSearch">Buscar</button>
                </form>
            </>
            )
}
};

export default SearchBox;