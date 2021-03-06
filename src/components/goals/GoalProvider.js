import React, { useState, createContext } from "react"
export const GoalContext = createContext()

export const GoalProvider = (props) => {

  const [goalData, setGoalData] = useState([])

  const getGoalData = async () => {

    const response = await fetch("http://localhost:8000/goals", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      }
    })
    const value = await response.json()
    return setGoalData(value)
  }
  const createGoalData = async data => {
    const response = await fetch(`http://localhost:8000/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      },
      body: JSON.stringify(data)
    })
    const getData = await response.json()
    return getGoalData(getData)
  }

  const createGoalDataTwo = async data => {
    const response = await fetch(`http://localhost:8000/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      },
      body: JSON.stringify(data)
    })
    const getDataTwo = await response.json()
    return getGoalData(getDataTwo)
  }

  const deleteGoalData = async (goalId) => {
    const result = await fetch(`http://localhost:8000/goals/${goalId}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      },
    })
    return getGoalData(result)
  }

  const getGoalDataById = (goalId) => {
    return fetch(`http://localhost:8000/goals/${goalId}`, {
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

  const updateGoalData = async goalId => {
    const result = await fetch(`http://localhost:8000/goals/${goalId.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      },
      body: JSON.stringify(goalId)
    })
    return getGoalData(result)
  }

  return (
    <GoalContext.Provider value={{
      goalData,
      createGoalData,
      getGoalData,
      createGoalDataTwo,
      deleteGoalData,
      getGoalDataById,
      updateGoalData
    }} >
      {props.children}
    </GoalContext.Provider>
  )
}