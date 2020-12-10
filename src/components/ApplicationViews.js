import React from "react"
import { Route } from "react-router-dom"
import { ScoreBoardProvider } from "./scoreboard/ScoreBoardProvider"
import { ScoreBoardList } from './scoreboard/ScoreBoardList'


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
         
               <ScoreBoardProvider>
                   <Route exact path="/">
                   <ScoreBoardList />
                   </Route>
               </ScoreBoardProvider>
          
        </main>
    </>
}