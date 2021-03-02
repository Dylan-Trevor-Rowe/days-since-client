import React, { useState } from "react"

export const ScoreBoardContext = React.createContext()

export const ScoreBoardProvider = (props) => {
  const [scoreBoardData, setScoreBoardData] = useState([])

  const createScoreBoard = async data => {
    const response = await fetch(`http://localhost:8000/home`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      },
      body: JSON.stringify(data)
    })
    const getData = await response.json()
    return setScoreBoardData(getData)
  }

  const getScoreBoardData = async () => {
    const response = await fetch("http://localhost:8000/home", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      },
    })
    const value = await response.json()
    return setScoreBoardData(value)
  }

  const getScoreBoardDataById = (score) => {
    return fetch(`http://localhost:8000/home/${score}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("days_since_token")}`,
        "Content-Type": "application/json",
      }
    })
      .then((res) =>
        res.json()
      )
      .then(res => res)
  };

  return (
    <ScoreBoardContext.Provider value={{
      getScoreBoardData,
      scoreBoardData,
      setScoreBoardData,
      createScoreBoard,
      getScoreBoardDataById
    }} >
      { props.children}
    </ScoreBoardContext.Provider>
  )
}