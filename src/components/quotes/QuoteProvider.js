import React, { useState, createContext } from "react"

export const QuoteContext = createContext()

export const QuoteProvider = (props) => {
  const [quoteData, setQuoteData] = useState([])
  console.log(quoteData)

  const getQuoteData = async () => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuoteData(data);
      });
  }
  return (
    <QuoteContext.Provider value={{
      getQuoteData, quoteData


    }} >
      { props.children}
    </QuoteContext.Provider>
  )
}