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
import { Journal } from './journalentry/Journal'
import { Articles } from './articles/Articles'
import { ArticleProvider } from "./articles/ArticleProvider"

export const ApplicationViews = (props) => {

    return <>
        <BrowserRouter>
            <CheckedGoalsProvider>
                <JournalEntryProvider>
                    <GoalProvider>
                        <WellBeingProvider>
                            <ArticleProvider>
                                <NavBar />
                                <Route exact path="/login"></Route>
                                <Route exact path="/wellbeing" render={(matchProps) => {
                                    return <WellBeingList {...props} {...matchProps} />
                                }} />
                                <Route path="/goalsform" exact component={GoalsForm} render={(matchProps) => {
                                    return <GoalsForm {...props} {...matchProps} />
                                }} />


                                <Route exact path="/articles" render={(matchProps) => {
                                    return <Articles {...props} {...matchProps} />
                                }} />
                                <Route exact path="/journal" render={(matchProps) => {
                                    return <Journal {...props} {...matchProps} />
                                }} />
                                <Route path="/goals" exact component={GoalsList} render={(matchProps) => {
                                    return <GoalsList {...props} {...matchProps} />
                                }} />


                                <Route exact path="/journalform" render={(matchProps) => {
                                    return <JournalEntryForm {...props} {...matchProps} />
                                }} />

                                <Route exact path="/wellbeingform" render={(matchProps) => {
                                    return <WellBeingForm {...props} {...matchProps} />
                                }} />
                                <Route exact path='/wellbeingform/edit/:wellBeingId(\d+)' render={(matchProps) => {
                                    return <WellBeingForm {...props}
                                        {...matchProps}
                                    />
                                }} />

                                <Route exact path='/journalform/edit/:journalId(\d+)' render={(matchProps) => {
                                    return <JournalEntryForm {...props}
                                        {...matchProps}
                                    />
                                }} />
                                <Route exact path="/goalsform/edit/:goalId(\d+)" render={(matchProps) => {
                                    return <GoalsForm {...props} {...matchProps} />
                                }} />

                                <ScoreBoardProvider>
                                    <Route exact path="/">

                                        <ScoreBoardList />
                                    </Route>
                                </ScoreBoardProvider>
                            </ArticleProvider>
                        </WellBeingProvider>
                    </GoalProvider>
                </JournalEntryProvider>
            </CheckedGoalsProvider>
        </BrowserRouter>
    </>
}