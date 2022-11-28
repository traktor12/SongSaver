import React,{useContext} from 'react';
import {SongContext} from "./SongName";
import {ArtistContext} from './ArtistName';

export const SubmitContext = React.createContext();


function FormSubmit(){

    const stitle = useContext(SongContext)
    const artist= useContext(ArtistContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({stitle},{artist})
    }

    return(
        <SubmitContext.Provider value={{stitle, artist}}>
        <button form="addSong" type="submit" onClick={handleSubmit}>Submit</button>
        </SubmitContext.Provider>
    )
}

export default FormSubmit