import React, {useState, useEffect} from 'react'
import Tile from './Tile'

function Board({data}){

  return (
    <div className="board-wrapper">
      {(typeof data.board === "undefined") ? (
        <p>Loading...</p>
      ):(
        data.board.map((tile, i) => (
            <Tile key={i} value={tile}></Tile>
          ))
      )}

    </div>
  )
}

export default Board