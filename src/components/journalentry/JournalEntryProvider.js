import React, { useState } from "react"

export const JournalEntryContext = React.createContext()

export const JournalEntryProvider = (props) => {
    const [JournalEntryData, setJournalEntryData] = useState([])

    const createJournalEntryData = async data => {
        const response = await fetch(`http://localhost:8000/journal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            },
            body: JSON.stringify(data)
        })
        const getData = await response.json()
        return setJournalEntryData(getData)
    }

    const getJournalEntryData = async () => {
        const response = await fetch("http://localhost:8000/journal", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            }
        })
        const value = await response.json()
        return setJournalEntryData(value)
            
    }
    return (
        <JournalEntryContext.Provider value={{
            getJournalEntryData, JournalEntryData, setJournalEntryData, createJournalEntryData
        }} >
            { props.children}
        </JournalEntryContext.Provider>
    )
}