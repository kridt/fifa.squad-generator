import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
require('dotenv').config()
export default function Start() {
    const apiKey = process.env.React_App_API_KEY;
    const [players, setPlayers] = useState({})

    useEffect(() =>{
        axios.get(`https://futdb.app/api/players`, {
            headers: {
                "X-AUTH-TOKEN": apiKey
            }
        })
        .then((response) => setPlayers(response.data))
    }, [setPlayers, apiKey])
    
    console.log(players);
    /* useEffect(()=>{

        
        fetch(`https://futdb.app/api/players/17432`,{
            headers: {
                "X-AUTH-TOKEN": apiKey,
            }
        })
        .then(response => response.json())
        .then(function(data){
            console.log(data);
        })
        
    },[]) */
        
    
  
    return (
        <div>
            <h1>Players</h1>
            {players.items?.map((player) =>{

            return(
                <li>

                    <Link to={`player/`+ player.id}>{player.name}</Link>
                </li>
            )
            })}
            
        </div>
    )
}
