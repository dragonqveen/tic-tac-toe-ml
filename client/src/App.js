import React, {useState, useEffect} from 'react'

function App(){
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("https://dragonqveen-ubiquitous-space-yodel-5xqr6777w493v74j-5000.preview.app.github.dev/members").then(
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
      {(typeof data.members === "undefined") ? (
        <p>Loading...</p>
      ):(
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}

    </div>
  )
}

export default App