import React, {useState, useEffect} from 'react'

function Tile({value, onTileClick}){
  return (
    <div className={`tile-wrapper ${!value ? 'free' : ''} `} onClick={onTileClick}>
        <div >{value}</div>
    </div>
  )
}

export default Tile