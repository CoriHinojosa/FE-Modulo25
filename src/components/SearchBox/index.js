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

    const theList = arrowMovies();
    const theList2 = theList.filter(movie => movie.name.toLowerCase().includes(data.search.toLowerCase())); 
    

    


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
            <h1>Películas Filtradas</h1>
                {
                    theList2.map((movie, i) => 
                        (<FilteredList name={movie.name} key={i}/>))
                }
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


//<FilteredList movieList={arrowMovies(data.search.toLowerCase())}/>;
/*
const Test123 = movie.filter(movie => movie.name.toLowerCase().includes(data.search.toLowerCase())); 
console.log("123 " + Test123);

    const theList2 = theList.filter(movie => movie.name.toLowerCase().includes(data.search.toLowerCase())); 
    console.log("LISTA 2" + theList);

    function arrowMovies2(theSearch) {
        const theMovies = theSearch; 
        theMovies.forEach(function(movieEnd) {
            console.log(movieEnd);
            return movieEnd;            
        });
    }
    */
