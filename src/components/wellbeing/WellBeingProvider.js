import React, { useState, createContext } from "react"


export const WellBeingContext = createContext()

export const WellBeingProvider = (props) => {
    const [wellBeingData, setWellBeingData] = useState([])

    const getWellBeingData = async () => {
        const response = await fetch("http://localhost:8000/wellbeing", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            }
        })
        const value = await response.json()
        return setWellBeingData(value)
            
    }
    const createWellBeingData = async data => {
        const response = await fetch(`http://localhost:8000/wellbeing`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            },
            body: JSON.stringify(data)
        })
        const getData = await response.json()
        return getWellBeingData(getData)
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
        <WellBeingContext.Provider value={{
            createWellBeingData, wellBeingData, setWellBeingData, getWellBeingData
           
        }} >
            { props.children}
        </WellBeingContext.Provider>
    )
}