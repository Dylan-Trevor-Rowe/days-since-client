import React, { useState, createContext } from "react"

export const CheckedGoalsContext = createContext()

export const CheckedGoalsProvider = (props) => {
  const [checkedGoals, setCheckedGoalsData] = useState([])

  const getCheckedGoalsData = async () => {
    const response = await fetch("http://localhost:8000/checkedgoals", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      }
    })
    const value = await response.json()
    return setCheckedGoalsData(value)

  }
  const createCheckedGoalsData = async data => {
    const response = await fetch(`http://localhost:8000/checkedgoals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      },
      body: JSON.stringify(data)
    })
    const getData = await response.json()
    return getCheckedGoalsData(getData)
  }

  return (
    <CheckedGoalsContext.Provider value={{
      getCheckedGoalsData,
      createCheckedGoalsData,
      checkedGoals
    }} >
      { props.children}
    </CheckedGoalsContext.Provider>
  )
}