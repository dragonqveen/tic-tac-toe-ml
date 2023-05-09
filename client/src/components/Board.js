import React, {useState, useEffect} from 'react'
import Tile from './Tile'

function Board(){
  const [tiles, setTiles] = useState(['', '', '', '', '', '', '', '', ''])
  const [currentPlayer, setCurrentPlayer] = useState('x')

  // nao iniciado, em andamento, finalizado
  const [boardStatus, setBoardStatus] = useState("Começando")

  const sendUpdatedBoard = () => {
    fetch('/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board: tiles,
      }),
    })
      .then((res) => res.json())
      .then((result) => setBoardStatus(result))
      .catch((err) => console.log('error'))
  }

  useEffect(() => sendUpdatedBoard, [tiles])

  function handleClick(i) {
    if(!tiles[i] && boardStatus=='Em Andamento'){
        tiles[i] = currentPlayer
        setTiles([...tiles])
        setCurrentPlayer(currentPlayer == 'x' ? 'o' : 'x')
    }
  }

  useEffect(()=>{},[tiles])

  return (
    <>
    <h2>Player 1: X {currentPlayer === 'x' && <span>Your turn!</span>}</h2>
    <h2>Player 2: O {currentPlayer === 'o' && <span>Your turn!</span>}</h2>
    <hr/>
    <h3>Game status: {boardStatus}</h3>
    <h3>Correct predictions: 0/0</h3>

    <div className="board-wrapper">
      {(typeof tiles === "undefined") ? (
        <p>Loading...</p>
      ):(
        tiles.map((tile, i) => (
            <Tile key={i} value={tile} onTileClick={() => handleClick(i)}></Tile>
          ))
      )}

    </div>
    <div>
      <button onClick={() => {setTiles(['', '', '', '', '', '', '', '', '']),setCurrentPlayer('x'),setBoardStatus("Começando")}}>
        Restart
      </button>
    </div>
    </>
  )
}

export default Board