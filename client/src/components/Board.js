import React, {useState, useEffect} from 'react'
import Tile from './Tile'

function Board({value}){
  const [tiles, setTiles] = useState(value.board)
  const [currentPlayer, setCurrentPlayer] = useState('x')

  function handleClick(i) {
    if(!tiles[i]){
        tiles[i] = currentPlayer
        setTiles([...tiles])
        setCurrentPlayer(currentPlayer == 'x' ? 'o' : 'x')
    }
    
    console.log(tiles)
  }

  useEffect(()=>{},[tiles])

  return (
    <>
    <h2>Player 1: X</h2>
    <h2>Player 2: O</h2>

    <div className="board-wrapper">
      {(typeof tiles === "undefined") ? (
        <p>Loading...</p>
      ):(
        tiles.map((tile, i) => (
            <Tile key={i} value={tile} onTileClick={() => handleClick(i)}></Tile>
          ))
      )}

    </div>
    </>
  )
}

export default Board