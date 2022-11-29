import React, {useState} from 'react';
import FormSubmit from './FormSubmit';

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
        <FormSubmit/>
        </SongContext.Provider>
    )
}

export default SongName;