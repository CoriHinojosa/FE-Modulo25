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

export function arrowMovies() {
    const movies2 = [
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
    return movies2;
};

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


/*
export function arrowMovies(theSearch) {
    const theMovies = movies.filter(movie => 
                      movie.name.toLowerCase().includes(theSearch));  
    theMovies.forEach(function(movieEnd) {
    console.log(movieEnd);
    return movieEnd;
    });
}
*/