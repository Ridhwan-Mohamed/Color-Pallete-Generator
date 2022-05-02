import React, { useCallback } from 'react'
import './public/index.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'

function Card(props) {
    const [display, setDisplay] = useState('none')

    function handleHover(){
        setDisplay('block')
    }

    function handleOut(){
        setDisplay('none')
    }

    function handleSubmit(){
        fetch('/MyPalletes', 
        {
            method: 'DELETE',
            headers: 
            {
              'Content-Type': 'application/json'
            },
            body:
            JSON.stringify({ 
                id: props.item._id
            })
        }, {signal: AbortController.signal})
    }

    return (
        <div className="card-set">
            <div className="card" onMouseOver={handleHover} onMouseOut={handleOut}>
                <div style={{backgroundColor:props.item.col1}}></div>
                <div style={{backgroundColor:props.item.col2}}></div>
                <div style={{backgroundColor:props.item.col3}}></div>
                <div style={{backgroundColor:props.item.col4}}></div>
                <div style={{backgroundColor:props.item.col5}}></div>
                <div className='content' >
                    <h1>{props.item.name}</h1>
                    <form onSubmit={handleSubmit}>
                        <button><FontAwesomeIcon icon={faTrash} style={{display: display}}/></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Card