import React from "react"
import { Route } from "react-router-dom"
import { ScoreBoardProvider } from "./scoreboard/ScoreBoardProvider"
import { ScoreBoardList } from './scoreboard/ScoreBoardList'
import { NavBar } from './nav/NavBar.js'
import { Login } from './auth/Login'
import { WellBeingForm } from './wellbeing/WellBeingForm'


export const ApplicationViews = () => {
    return <>
    <Route exact path ="/login">
        <Login />
    </Route>
    <Route exact path ="/wellbeingform">
        <WellBeingForm />
    </Route>
        <ScoreBoardProvider>
            <Route exact path="/">
                <NavBar />
                <ScoreBoardList />
            </Route>
        </ScoreBoardProvider>
    </>
}