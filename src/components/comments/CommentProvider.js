import React, { useState, createContext } from "react"


export const CommentContext = createContext()

export const CommentProvider = (props) => {
    const [commentData, setCommentData] = useState([])

    const getCommentData = async () => {
        const response = await fetch("http://localhost:8000/comments", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            }
        })
        const value = await response.json()
        return setCommentData(value)

    }

    

  const getCommentByArticleId = (articleId) => {
    return fetch(`http://localhost:8000/comments?article=${articleId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("days_since_token")}`
        }
    })
        .then(response => response.json())
        .then(setCommentData)
}
    const createCommentData = async data => {
        const response = await fetch(`http://localhost:8000/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            },
            body: JSON.stringify(data)
        })
        const getData = await response.json()
        return getCommentData(getData)
    }

    return (
        <CommentContext.Provider value={{
            getCommentData, createCommentData, commentData, getCommentByArticleId

        }} >
            { props.children}
        </CommentContext.Provider>
    )
}