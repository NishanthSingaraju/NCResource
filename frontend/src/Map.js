import {
    MapContainer,
    TileLayer,
    Marker, 
    Circle,
    CircleMarker
  } from 'react-leaflet'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import ResourceModal from "./Modal"

function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../news_data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
  }

const EXAMPLE = require("./resource.json")
console.log(EXAMPLE)


export default function Map() {
    const [base, setBase] = useState(null);
    const [county, setCounty] = useState(null);
    const [state, setState] = useState(null);
    const [open, setOpen] = useState(false)
    const [element, setElement] = useState(null)
 
    useEffect(() => {
        axios.get("http://localhost:5000/map").then((res) => {
            setBase(res.data.image);
            setCounty(res.data.county);
            setState(res.data.state);
         })

      }, []);

    var onClick = (element) => {
        setElement(element)
        handleOpen()
        console.log(open)
    }
    var handleOpen = () => {setOpen(true)}
    var handleClose = () => {setOpen(false)}

    return (
        <React.Fragment>
        <MapContainer style={{backgroundColor: "black",height: "100vh", width: "100vw"}} center={{lat: 35.938, lng:-79.81}} zoom={10}>
            {base ?
             <TileLayer
                url={base}
            /> : null}
            {county ?
             <TileLayer
                url={county}
            /> : null}
            {state ?
             <TileLayer
                url={state} d
            /> : null}
        
        {EXAMPLE.map((element, index) => (
        <CircleMarker key={index} radius={5} color="purple" center={element.positions} eventHandlers= {{click: () => onClick(element)}}/>
        ))}      
        </MapContainer>
        {element ?
        <ResourceModal element = {element} open= {open} handleClose={handleClose}></ResourceModal> :
        null}
        </React.Fragment>
    )
}