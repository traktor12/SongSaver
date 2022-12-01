import React, { useState } from "react";

function FormStandalone(props) {

    const [stitle, setStitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre]= useState('None');
    const [rating, setRating]= useState('');
//Code to be executed when "submit" is pressed -----------------------------------------
    const handleSubmit = e=>{
      e.preventDefault(); //Stop the page from default reloading 
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            SongTitle: stitle,
            Artist: artist,
            Genre: genre,
            Rating: rating
        })
    }
//Return statement -----------------------------------------------------------------------
  return (
    <div>
        <form onSubmit={handleSubmit}>
{/*Input field for the Song Name --------------------------------------------------*/}
      <input
        placeholder="Song title"
        type="text"
        value={stitle}
        onChange={(e) => setStitle(e.target.value)}
      />
{/*Input Field for the Artist's name ---------------------------------------------*/}
        <input     
        placeholder="Artist name"
        type='text'
        value={artist}
        onChange={(e)=>setArtist(e.target.value)}
        />
{/*Dropdown for selecting the genre of the song ----------------------------------*/}
          <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
            <option value='None'>None</option>
            <option value='Rock'>Rock</option>
            <option value='Metal'>Metal</option>
        </select>
{/*Enter a number to rate the song ---------------------------------------------- */}
        <input    
        placeholder="Rating"
        type='number'
        id='ratingField'
        value={rating}
        onChange={(e)=>setRating(e.target.value)}
        />
{/*The Submit button --------------------------------------------------------------*/}
    <button form="addSong" id="songSubmitBtn" onClick={handleSubmit} type="submit">Submit</button>
    </form>
    </div>
  );
}
//Export ------------------------------------------------------------------------------
export default FormStandalone;
