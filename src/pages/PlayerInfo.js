import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardTemp from '../components/CardTemp'
require('dotenv').config()

export default function PlayerInfo({ id }) {
    const [player, setPlayer] = useState({})
    const apiKey = process.env.React_App_API_KEY

    useEffect(() => {
        axios.get(`https://futdb.app/api/players/${id}`, {
            headers: {
                "X-AUTH-TOKEN": apiKey
            }
        })
        .then(response => setPlayer(response.data?.item))
    }, [setPlayer])

    console.log(player);
    return (
        <div>
            <h1>Player Info</h1>
            <div>
                <CardTemp data={player} />
            </div>
        </div>
    )
}
