import React, {useState, useEffect} from 'react'
import Board from './components/Board'
import './App.css'

function App(){
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("https://dragonqveen-ubiquitous-space-yodel-5xqr6777w493v74j-5000.preview.app.github.dev/board").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.board === "undefined") ? (
        <p>Loading...</p>
      ): <Board value={data}></Board>
      }

    </div>
  )
}

export default App