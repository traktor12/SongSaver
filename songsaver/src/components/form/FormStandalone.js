import React, { useState } from "react";

function FormStandalone() {

    const [stitle, setStitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre]= useState('none');

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({stitle},{aname: artist},{genre})
    }

  return (
    <div>
      <input
        type="text"
        value={stitle}
        onChange={(e) => setStitle(e.target.value)}
      />
        <input     
        type='text'
        value={artist}
        onChange={(e)=>setArtist(e.target.value)}
        />
          <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
            <option value='none'>None</option>
            <option value='rock'>Rock</option>
            <option value='metal'>Metal</option>
        </select>
    <button form="addSong" type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormStandalone;
