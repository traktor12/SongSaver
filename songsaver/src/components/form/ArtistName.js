import React, {useState} from 'react';

export const ArtistContext = React.createContext();


function ArtistName(){
    const [aname, setAname] = useState('');

    return(
        <ArtistContext.Provider value={aname}>
        <input     
        type='text'
        value={aname}
        onChange={(e)=>setAname(e.target.value)}
        />
        </ArtistContext.Provider>
    )
}

export default ArtistName   