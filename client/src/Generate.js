import React from "react";
import './public/index.css'
import {useState, useEffect} from 'react'
var randomcolor = require('randomcolor')

function Generate() {

    const [col1, setCol1]      = useState(randomcolor())
    const [col2, setCol2]      = useState(randomcolor())
    const [col3, setCol3]      = useState(randomcolor())
    const [col4, setCol4]      = useState(randomcolor())
    const [col5, setCol5]      = useState(randomcolor())
    const [display, setDisplay] = useState('None')
    const [name, setName]      = useState('')


    useEffect(() => {
       console.log('USEFEEC')
        const id = document.addEventListener('keyup', event => {
            if (event.code === 'Enter') {
              setCol1(randomcolor({
                luminosity: 'monochrome',
                format: 'rgba',
                alpha: '1'
             }))
              setCol2(randomcolor({
                luminosity: 'monochrome',
                hue: 'red'
             }))
              setCol3(randomcolor({
                luminosity: 'monochrome',
                format: 'rgba',
                alpha: '0.7'
             }))
              setCol4(randomcolor({
                luminosity: 'monochrome',
                format: 'rgba',
                alpha: '0.5'
             }))
              setCol5(randomcolor({
                luminosity: 'monochrome',
                format: 'rgba',
                alpha: '0.2'
             }))
            }
          })
        
          return id 
    },[])

    const color_1 = {backgroundColor: col1}
    const color_2 = {backgroundColor: col2}
    const color_3 = {backgroundColor: col3}
    const color_4 = {backgroundColor: col4}
    const color_5 = {backgroundColor: col5}


    function handleSubmit(e) {
      setDisplay('block')
       fetch('/MyPalletes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
           col1: col1,
           col2: col2,
           col3: col3,
           col4: col4,
           col5: col5,
           name: name})}, 
        {signal: AbortController.signal})
        .catch(err => {
          if (err.name === 'AbortError'){
            console.log('Aborted fetch')
          }
        })
    }

    function handleChange(e) {
      setName(e.target.value)
    }

    function showModal() {
      setDisplay('block')
    }

    function hideModal() {
      setDisplay('none')
    }

    return (
        <div className="g_backback">
            <div className="mask" style={{display: display}}>
              <div className='modal'>
                  <h2>Name it!</h2>
                    <label>Pallete Name: </label>
                    <input style={{marginBottom:'10px'}} id="text" type="text" value={name} onChange={handleChange}/>
                    <br/>
                    <form onSubmit={handleSubmit}>                   
                       <input type="submit" value="Save"></input>
                    </form>
                    <button onClick={hideModal}>Close</button>
              </div>
            </div>
            <div className="g_background">
                <div className="instructions">
                    <h1>Press Enter to get a new pallete</h1>
                    <button onClick={showModal}>Save</button>
                </div>
                <div className="col1" style={color_1} >

                </div>
                <div className="col2" style={color_2}>

                </div >
                <div className="col3" style={color_3}>

                </div>
                <div className="col4" style={color_4}>

                </div>
                <div className="col5" style={color_5}>

                </div>
            </div>
        </div>
    ) 
}

export default Generate