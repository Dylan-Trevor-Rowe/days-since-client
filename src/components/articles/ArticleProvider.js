import React, { useState, createContext } from "react"

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
    const [articleData, setArticleData] = useState([])
console.log(articleData)
   
const getArticleData = async () => {
        const response = await fetch("http://localhost:8000/articles", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            }
        })
        const value = await response.json()
        return setArticleData(value)

    }
    const createArticleData = async data => {
        const response = await fetch(`http://localhost:8000/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            },
            body: JSON.stringify(data)
        })
        const getData = await response.json()
        return getArticleData(getData)
    }


    const deleteArticleData = async (articleId) => {
        const result = await fetch(`http://localhost:8000/articles/${articleId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Token ${localStorage.getItem("days_since_token")}`
            },
        })
        return getArticleData(result)
    }
// hopefully this works
    return (
        <ArticleContext.Provider value={{
            articleData, createArticleData, getArticleData, deleteArticleData
        }} >
            { props.children}
        </ArticleContext.Provider>
    )
}