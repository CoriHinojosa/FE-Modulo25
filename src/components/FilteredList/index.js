import "./styles.css";
import { useState } from "react";

const FilteredList = ({ movieList }) => {
    const [ name, setName ] = useState("");

    
    return (
        <>
            <ul>
                {movieList}
            </ul>
        </>
    )
}

export default FilteredList;

