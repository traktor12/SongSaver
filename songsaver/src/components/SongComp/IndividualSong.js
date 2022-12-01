import React, {useState} from 'react';
import FormStandalone from './FormStandalone';

const Song=({songs, completeSong, removeSong,allFilter})=>{
//---------------------------------------------------
//---------------------------------------------------
const cx = songs.map((song) => (
    <div key={song.id} >
    <div  key={song.id} onClick={()=>completeSong(song.id)}>
        <span className='indDisplayedSongs'>
            {song.SongTitle}⠀⠀ by: {song.Artist}⠀⠀{song.Genre}⠀⠀ Rating: {song.Rating}
        </span>
        
                <span className='songButtons'>
                    <button
                    onClick={() => removeSong(song.id)}
                    >DELETE</button>  
            
                </span>
    </div>
    </div>
))
const sx = songs.map((song) => (
    <div key={song.id} >
    <div  key={song.id} onClick={()=>completeSong(song.id)}>
        <span className='indDisplayedSongs'>
            {song.SongTitle}⠀⠀ by: {song.Artist}⠀⠀{song.Genre}⠀⠀ Rating: {song.Rating}
        </span>
    </div>
    </div>
))
//---------------------------------------------------
    return (
        <div>
        {!allFilter ? cx : sx}
        </div>
    )

}   

export default Song;