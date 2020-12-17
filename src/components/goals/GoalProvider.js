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



    // const editWellBeingData = async data => {
    //     const getEditData = await fetch(`http://localhost:8000/games/${game.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Token ${localStorage.getItem("days_since_token")}`
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     return getWellBeingData(getEditData)
    // }

    // const getSingleWellBeing = async (id) => {
    //     const response = await fetch(`http://localhost:8000/games/${id}`, {
    //         headers: {
    //             "Authorization": `Token ${localStorage.getItem("days_since_token")}`
    //         }
    //     })
    //     return await response.json()
    // }

    return (
        <GoalContext.Provider value={{
            goalData, createGoalData, getGoalData
           
        }} >
            { props.children}
        </GoalContext.Provider>
    )
}