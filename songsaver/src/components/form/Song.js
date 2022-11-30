import React, {useState} from 'react';
import FormStandalone from './FormStandalone';

const Song=({songs, completeSong, removeSong, updateSong,})=>{
//---------------------------------------------------
    const[edit,setEdit]=useState({
        id: null,
        value:''
    });
//---------------------------------------------------
    const submitUpdate=value=>{
        updateSong(edit.id,value);
        setEdit({
            id:null,
            value:''
        });
    };
//---------------------------------------------------
    if (edit.id){
        return <FormStandalone edit={edit} onSubmit={submitUpdate} />
    }
//---------------------------------------------------
//---------------------------------------------------
    return songs.map((song) => (
        <div key={song.id} >
        <div  key={song.id} onClick={()=>completeSong(song.id)}>
        <span>Song: {song.SongTitle} - Artist: {song.Artist} - Genre: {song.Genre} - Rating {song.Rating}</span>
        </div>

        <div className='icons'>
            <button
            onClick={() => removeSong(song.id)}
            className='delete-icon'
            >DELETE</button>
            <button
            onClick={() => setEdit({ id: song.id, value: song.SongTitle  })}
            className='edit-icon'
            >UPDATE</button>
      </div>

        </div>
    ))

}   

export default Song;