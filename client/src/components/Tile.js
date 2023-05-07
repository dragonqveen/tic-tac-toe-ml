import React, {useState, useEffect} from 'react'

function Tile({value}){
  const [data, setData] = useState([value])

  return (
    <div className="tile-wrapper">
      {(typeof data === "undefined") ? (
        <p>Loading...</p>
      ):(
        <div>{data}</div>
      )}

    </div>
  )
}

export default Tile