import React from "react"
import { Route, BrowserRouter } from "react-router-dom"
import { ScoreBoardProvider } from "./scoreboard/ScoreBoardProvider"
import { ScoreBoardList } from './scoreboard/ScoreBoardList'
import { NavBar } from './nav/NavBar.js'
import { WellBeingForm } from './wellbeing/WellBeingForm'
import { WellBeingProvider } from './wellbeing/WellBeingProvider'
import { GoalsForm } from './goals/GoalsForm'
import { GoalProvider } from './goals/GoalProvider'
import { JournalEntryForm } from "./journalentry/journalEntryForm"
import { JournalEntryProvider } from './journalentry/JournalEntryProvider'
import { GoalsList } from './goals/Goals'
import { CheckedGoalsProvider } from "./goals/CheckedGoalProvider"
import { WellBeingList } from './wellbeing/WellBeingList'


export const ApplicationViews = () => {

    return <>
        <CheckedGoalsProvider>
            <JournalEntryProvider>
                <GoalProvider>
                    <WellBeingProvider>
                        <Route exact path="/login">

                        </Route>
                        <Route exact path="/wellbeing">
                            <NavBar></NavBar>
                            <WellBeingList />
                        </Route>
                        <Route path="/goalsform" exact component={GoalsForm}>
                            <NavBar />
                            <GoalsForm />
                        </Route>
                        <Route path="/goals" exact component={GoalsList}>
                            <NavBar />
                            <GoalsList />
                        </Route>
                        <Route exact path="/journalform">
                            <NavBar />
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
                    </WellBeingProvider>
                </GoalProvider>
            </JournalEntryProvider>
        </CheckedGoalsProvider>
    </>
}