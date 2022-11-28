import React, {useState} from 'react';

export const SongContext = React.createContext();

function SongName(){
    const [stitle, setStitle] = useState('');

    return(
        
        <SongContext.Provider value={{stitle}}>
        <input     
        type='text'
        value={stitle}
        onChange={(e)=>setStitle(e.target.value)}
        />
        </SongContext.Provider>
    )
}

export default SongName;