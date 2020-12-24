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

    const deleteWellBeingData = async (wellBeingId) => {
        const getData = await fetch(`http://localhost:8000/wellbeing/${wellBeingId}`, {
            method: 'DELETE',
            headers: {
              
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            },
        })
        return getWellBeingData(getData)
    }

    const updateWellBeingData = async wellBeingId => {
        const result = await fetch(`http://localhost:8000/wellbeing/${wellBeingId.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            },
            body: JSON.stringify(wellBeingId)
        })
        return getWellBeingData(result)
    
    }

    const getWellBeingDataById = (wellBeingId) => {
        return fetch(`http://localhost:8000/wellbeing/${wellBeingId}`, {
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
        <WellBeingContext.Provider value={{
            createWellBeingData, 
            wellBeingData, 
            setWellBeingData, 
            getWellBeingData, 
            deleteWellBeingData,
            updateWellBeingData,
            getWellBeingDataById
           
        }} >
            { props.children}
        </WellBeingContext.Provider>
    )
}