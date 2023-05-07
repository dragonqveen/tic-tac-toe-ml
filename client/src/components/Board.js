import React, {useState, useEffect} from 'react'
import Tile from './Tile'

function Board(){
  const [data, setData] = useState(['x ', ' ', ' ', 'o ', ' ', ' ', ' x', ' ', ' x'])

  return (
    <div className="board-wrapper">
      {(typeof data === "undefined") ? (
        <p>Loading...</p>
      ):(
        data.map((tile, i) => (
            <Tile key={i} value={tile}></Tile>
          ))
      )}

    </div>
  )
}

export default Board