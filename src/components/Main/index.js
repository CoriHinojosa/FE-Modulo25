import "./styles.css";
import Movie from "./Movie";

const movies = [
    {name: "Scream"},
    {name: "Scream 2"},
    {name: "Scream 3"},
    {name: "Halloween"},
    {name: "Halloween 2"},
    {name: "Halloween 3"},
    {name: "Halloween 4"},
    {name: "Star Wars"},
    {name: "Star Trek"},
    {name: "Lord of the Rings"},
];

export function arrowMovies(theSearch) {
    console.log(movies.filter(movie => 
        movie.name.toLowerCase().includes(theSearch)));
}

const Main = () => {  
    return (
        <main>
            <h1>Lista De Películas</h1>
            <article>
                {
                    movies.map((movie, i) => 
                        (<Movie name={movie.name} key={i}/>))
                }
            </article>
        </main>
    )
}

export default Main;


    //const filterMovies = movies.filter(movie => movie.name.toLowerCase().includes("halloween"));
    //console.log(filterMovies);
//    const arrowMovies = (theSearch) =>
//    movies.filter(movie => movie.name.toLowerCase().includes(theSearch));
//    console.log(arrowMovies("halloween"));