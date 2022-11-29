import React, {useState} from 'react';
import FormStandalone from './FormStandalone';
import Song from './Song';

function SongList(){

    const [songs, setSongs]=useState([]);

    const songList = e=>{
        if (!e.SongTitle || !e.Artist || !e.Genre || !e.Rating ){
            return;
          }
        const newSongs = [e,...songs];
        setSongs(newSongs);
        console.log(e,...songs);
    }

    const updateSong = (songId, newInput)=>{
        if(!newInput.SongTitle ||
            !newInput.Artist ||
            !newInput.Genre ||
            !newInput.Rating){
            return
        }
        setSongs(p=>p.map(i=>(i.id===songId?newInput:i)));
    }

    const removeSong=id=>{
        const removedS = [...songs].filter(song=>song.id!==id);
        setSongs(removedS);
    }

    const completeSong = id => {
        let updatedSongs = songs.map(song=>{
            if(song.id===id){
                song.isComplete = !song.isComplete
            }
            return song;
        });
        setSongs(updatedSongs);
    }

    return(
        <div>
            <h1>Saved Songs</h1>
            <FormStandalone onSubmit={songList}/>
            <Song
                songs={songs}
                completeSong={completeSong}
                removeSong={removeSong}
                updateSong={updateSong}
            />
        </div>
    )

}

export default SongList;