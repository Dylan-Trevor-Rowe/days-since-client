import React, { useState } from "react"

export const ScoreBoardContext = React.createContext()

export const ScoreBoardProvider = (props) => {
    const [scoreBoardData, setScoreBoardData] = useState([])


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
            getScoreBoardData, scoreBoardData, setScoreBoardData
        }} >
            { props.children}
        </ScoreBoardContext.Provider>
    )
}