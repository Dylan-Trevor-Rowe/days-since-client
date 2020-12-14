import React from "react"
import { Route } from "react-router-dom"
import { ScoreBoardProvider } from "./scoreboard/ScoreBoardProvider"
import { ScoreBoardList } from './scoreboard/ScoreBoardList'
import { NavBar } from './nav/NavBar.js'
import { WellBeingForm } from './wellbeing/WellBeingForm'
import { GoalsForm } from './goals/GoalsForm'
import { JournalEntryForm } from "./journalentry/journalEntryForm"


export const ApplicationViews = () => {

    return <>
        <Route exact path="/login">

        </Route>
        <Route exact path="/goalsform">
            <NavBar />
            <GoalsForm />
        </Route>
        <Route exact path="/journalform">
           <JournalEntryForm />
        </Route>
        <Route exact path="/wellbeingform">
            <NavBar />
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