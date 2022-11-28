import React from "react";
import SongName from "./SongName";
import ArtistName from "./ArtistName";
import GenreSelect from "./GenreSelect";
import FormSubmit from "./FormSubmit";


function FullForm(){

    return(
        <form id='addSong'>
            <SongName/>
            <ArtistName/>
            <GenreSelect/>
            <FormSubmit/> 
        </form>
    )
}

export default FullForm