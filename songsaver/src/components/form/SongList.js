import React, {useState} from 'react';
import FormStandalone from './FormStandalone';
import Song from './Song';

function SongList(){

    const [songs, setSongs]=useState([]);
    const [allSongs, setAllSongs]=useState([]);
//Create new song ----------------------------------------------------------
    const newSong = e=>{
        if (!e.SongTitle || !e.Artist || !e.Genre || !e.Rating ){
            return;
          }
        const newSongs = [e,...songs];
        setSongs(newSongs);
        setAllSongs(newSongs);
        console.log(e,...songs);
    }
//Filter song ----------------------------------------------------------------
function filterGenre(){
    let options=
    <select name='genreFilterSelect' onChange={filterChange}>
        <option value='All'>All</option>
        <option value='None'>None</option>
        <option value='Rock'>Rock</option>
        <option value='Metal'>Metal</option>
    </select>

    function filterChange(event){
        console.log(event.target.value)
        console.log(allSongs)
                if (event.target.value==='All'){
                    setSongs(allSongs);
                }
                else {
                    setSongs(allSongs)
                   setSongs([...songs].filter(song=>song.Genre===event.target.value));  
                }
    }
    return (
          options  
            )
}
//Update song ----------------------------------------------------------------
    const updateSong = (songId, newInput)=>{
        if(!newInput.SongTitle ||
            !newInput.Artist ||
            !newInput.Genre ||
            !newInput.Rating){
            return
        }
        setSongs(p=>p.map(i=>(i.id===songId?newInput:i)));
        setAllSongs(p=>p.map(i=>(i.id===songId?newInput:i)));

    }
//Delete song ----------------------------------------------------------------
    const removeSong=id=>{
        const removedS = [...songs].filter(song=>song.id!==id);
        setSongs(removedS);
        setAllSongs(removedS);
    }
//----------- ----------------------------------------------------------------
    const completeSong = id => {
        let updatedSongs = songs.map(song=>{
            if(song.id===id){
                song.isComplete = !song.isComplete
            }
            return song;
        });
        setSongs(updatedSongs);
    }
//return statement ----------------------------------------------------------
    return(
        <div>
            <h1>Saved Songs</h1>
            <FormStandalone
            onSubmit={newSong}
            />
                    {filterGenre()}
            <Song
                allSongs={allSongs}
                songs={songs}
                completeSong={completeSong}
                removeSong={removeSong}
                updateSong={updateSong}
            />
        </div>
    )

}

export default SongList;