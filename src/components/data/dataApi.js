import React, { useEffect, useState } from 'react'

 
    const DataApi = () => {
    const url =  'https://www.freetogame.com/api/games?platform=pc'

    const [game, setGame] = useState([])
    
    useEffect(() =>{
        getData()
    }, [])    

    const getData = async () => {
        const data = await fetch(url)
        const game = await data.json()
        console.log(game)
        setGame(game)
    }

    return (
      <div>
          <ul>
              {
                  game.map(item =>(
                      <li key={item.id}>{item.title} - {item.thumbnail} - {item.genre}</li>
                  ))
              }
          </ul>
      </div>
    )
  }


export default DataApi