import React, { useState } from "react"

export const ScoreBoardContext = React.createContext()

export const ScoreBoardProvider = (props) => {
    const [scoreBoardData, setScoreBoardData] = useState([])

    const createScoreBoard = async data => {
        const response = await fetch("http://localhost:8000/home", {
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
        try {
            const response = await fetch("http://localhost:8000/home", {
                headers: {
                    "Authorization": `Token ${localStorage.getItem("days_since_token")}`
                }
            })
            const value = await response.json()
            return setScoreBoardData(value)
        } catch (err) {

        }
    }
    return (
        <ScoreBoardContext.Provider value={{
            getScoreBoardData, scoreBoardData, setScoreBoardData, createScoreBoard
        }} >
            { props.children}
        </ScoreBoardContext.Provider>
    )
}