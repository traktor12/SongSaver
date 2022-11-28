import React, {useState} from 'react';

function GenreSelect(){
    const[genre, setGenre]= useState('none');

    return(
        <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
            <option value='none'>None</option>
            <option value='rock'>Rock</option>
            <option value='metal'>Metal</option>
        </select>
    )
}

export default GenreSelect