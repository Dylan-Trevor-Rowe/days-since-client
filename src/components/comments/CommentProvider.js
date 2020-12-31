import React, { useState, createContext } from "react"


export const CommentContext = createContext()

export const CommentProvider = (props) => {
    const [commentData, setCommentData] = useState([])


 
    const getCommentById = (commentId) => {
        return fetch(`http://localhost:8000/comments/${commentId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            }
        })
            .then(res => res.json())
    }

    // }

    const getCommentsByArticleId = (articleId) => {
        return fetch(`http://localhost:8000/comments?article=${articleId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            }
        })
            .then(res => res.json())
    }

    const createCommentData = (newComment) => {
        return fetch(`http://localhost:8000/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("days_since_token")}`
          },
          body: JSON.stringify(newComment),
        }).then(() => {
          getCommentsByArticleId(newComment.post_id);
        });
      };
    


    return (
        <CommentContext.Provider value={{
            getCommentById, createCommentData, commentData, getCommentsByArticleId, setCommentData

        }} >
            { props.children}
        </CommentContext.Provider>
    )
}