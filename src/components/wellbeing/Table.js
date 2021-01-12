import React, { useEffect, useContext } from 'react';
import { WellBeingContext } from './WellBeingProvider'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export function DataTable(props) {
    const { getWellBeingData, wellBeingData } = useContext(WellBeingContext)
    const [hoursOfSleepData, setHoursOfSleep] = React.useState();
    const [painScaleData, setPainScale] = React.useState();
    const [emotionalWellBeingData, setEmotionalWellBeing] = React.useState();
    const [fatigueScaleData, setFatigueScale] = React.useState();

    const classes = useStyles();

    useEffect(() => {
        getWellBeingData()
    }, [])

    useEffect(() => {
        let averagePainScale = []
        for (const wellBeing of wellBeingData) {
            averagePainScale.push(wellBeing.painScale)

            let sumTwo = averagePainScale.reduce((previous, current) => current += previous);
            const avgTwo = sumTwo / averagePainScale.length
            setPainScale(avgTwo)
        }
        let averageHoursOfSleep = []
        for (const wellBeing of wellBeingData) {
            averageHoursOfSleep.push(wellBeing.hoursOfSleep)

            let sumThree = averageHoursOfSleep.reduce((previous, current) => current += previous);
            const avgThree = sumThree / averageHoursOfSleep.length
            console.log("avgThree", avgThree)
            setHoursOfSleep(avgThree)
        }

        let emoWellBeing = []
        for (const wellBeing of wellBeingData) {
            emoWellBeing.push(wellBeing.emotionalWellBeing)

            let sum = emoWellBeing.reduce((previous, current) => current += previous);
            const avg = sum / emoWellBeing.length
            console.log(avg)
            setEmotionalWellBeing(avg)
        }
        let averageFatigueSclae = []
        for (const wellBeing of wellBeingData) {
            averageFatigueSclae.push(wellBeing.fatigueScale)
            let sumFour = averageFatigueSclae.reduce((previous, current) => current += previous);
            const avgFour = sumFour / averageFatigueSclae.length
            console.log("avgFour", avgFour)
            setFatigueScale(avgFour)
        }
    }, [wellBeingData])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontFamily: 'Tinos', fontSize: 'larger' }}>All Time averages</TableCell>
                        <TableCell style={{ fontFamily: 'Tinos', fontSize: 'larger' }} align="right">Sleep Average</TableCell>
                        <TableCell style={{ fontFamily: 'Tinos', fontSize: 'larger' }} align="right">Pain Average</TableCell>
                        <TableCell style={{ fontFamily: 'Tinos', fontSize: 'larger' }} align="right">Fatigue Average</TableCell>
                        <TableCell style={{ fontFamily: 'Tinos', fontSize: 'larger' }} align="right">Emotional Average</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                        </TableCell>
                        <TableCell style={{ fontFamily: 'Tinos', fontSize: 'larger' }} align="right">{hoursOfSleepData} hrs</TableCell>
                        <TableCell style={{ fontFamily: 'Tinos', fontSize: 'larger' }} align="right">{painScaleData}</TableCell>
                        <TableCell style={{ fontFamily: 'Tinos', fontSize: 'larger' }} align="right">{fatigueScaleData}</TableCell>
                        <TableCell style={{ fontFamily: 'Tinos', fontSize: 'larger' }} align="right">{emotionalWellBeingData}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}








