import React from "react";
import './public/index.css'
import Card from './Card'
import {useState, useEffect} from 'react'

function MyPalletes() {
    
    const [Card_prop, setCard]   = useState({})
    const [loading, setLoading]  = useState(true)
    const [pcards, setPcards]    = useState(null)

    
    useEffect(() => {
        console.log('Used effect')
        fetch('/MyPalletes', {method: 'GET'},
            {signal: AbortController.signal})
            .then(data => data.json())
            .then(result => {
                setCard(result)
                setLoading(false)
                setPcards(Card_prop.result.map(item => <Card key={item._id} item={item}/>))
            })
            .catch(err => {
              if (err.name === 'AbortError'){
                console.log('Aborted fetch')
              }
            })
    
    },[loading])
    
    const styles = {
        display: 'grid',
        height: '82vh',
        backgroundColor: 'lightgoldenrodyellow',
        width: '100%',
        gridTemplateColumns: "auto auto auto auto",
        gridTemplateRows: "auto auto",
        rowGap: '10px',
        columnGap: '10px'

    }

    return (
        <div>
            {loading 
                ? <h1>Loading</h1> 
                : 
                <div className="m_background">
                    <div className="grid" style={styles}>
                        {pcards}
                    </div>
                </div>
            }
        </div>
    )
}

export default MyPalletes