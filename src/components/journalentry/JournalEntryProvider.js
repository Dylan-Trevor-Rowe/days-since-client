import React, { useState } from "react"

export const JournalEntryContext = React.createContext()

export const JournalEntryProvider = (props) => {
  const [journalEntryData, setJournalEntryData] = useState([])

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

  const deleteJournalEntry = async (entryId) => {
    const result = await fetch(`http://localhost:8000/journal/${entryId}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      },
    })
    return getJournalEntryData(result)
  }

  const updateJournalData = async journalId => {
    const result = await fetch(`http://localhost:8000/journal/${journalId.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("days_since_token")}`
      },
      body: JSON.stringify(journalId)
    })
    return getJournalEntryData(result)

  }

  const getJournalEntryDataById = (journalId) => {
    return fetch(`http://localhost:8000/journal/${journalId}`, {
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
    <JournalEntryContext.Provider value={{
      getJournalEntryData, journalEntryData, setJournalEntryData, createJournalEntryData, deleteJournalEntry,
      updateJournalData, getJournalEntryDataById
    }} >
      { props.children}
    </JournalEntryContext.Provider>
  )
}