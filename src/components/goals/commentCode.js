// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'start',
//         marginLeft: 30,
//         marginTop: 50
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
//     root: {
//         width: 300,
//         marginTop: 35,
//         marginLeft: 30

//     },
//     Button: {
//         height: 40,
//         marginLeft: 10
//     }
// }));

// export const GoalsForm = () => {

//     const { getGoalData, goalData, createGoalData, createGoalDataTwo } = useContext(GoalContext)


//     useEffect(() => {
//         getGoalData()

//     }, [])


//     const classes = useStyles();

//     const [name, setName] = useState([])
//     const [num, setNum] = useState([])
//     const [checkboxVal, setCheckboxVal] = useState(false);
//     const [checkboxes, setCheckboxes] = useState([])

//     const getValue = (e) => {
//         const data = e.target.value;
//         setName(data)
//     }

//     const constructANewGoal = () => {
//         setNum(oldArrray => [...oldArrray, name])
//         // setNum(num + 1)
//         //    const dateData = new Date().toISOString().slice(0, 10);
//         // const newGoal = {
//         //     date: dateData,
//         //     goal_name: name
//         // }
//         // createGoalData(newGoal)
//     }

//     const handleChange = e => {
//         setCheckboxVal(!checkboxVal)
//         setCheckboxes(oldArray => [...oldArray, e.target.value])
//         const dateData = new Date().toISOString().slice(0, 10);
//         // const newGoal = {
//         //     date: dateData,
//         //     goal_name: name
//         // }
//         const myData = {
//             date: dateData,
//             goal_name: checkboxes 
//         }
//         createGoalDataTwo(myData)
       
//     }


//     console.log(checkboxes);


//     const renderCheckbox = (val) => {
//         //const newArr =   [...Array(num).keys("hello")]
//         return num.map((arr, index) => (

           
//             <div key={index}>
//                 <label>{arr}</label>
//                   <input type="checkbox" value={checkboxVal} onChange={handleChange} />
//                 {/* <FormControlLabel
                  
//                     //;checked={checkboxVal}
//                     control={<Checkbox   onChange={(e) => handleChange(e)} color="primary" value={checkboxVal} />}
//                     label={arr}
//                     labelPlacement="top"></FormControlLabel> */}
//             </div>
//         )
//         )
//     }

//     const submitData = () => {

//     }

//     console.log(num);

//     return <>

//         <div className="goals_container">

//             <form className={classes.container} noValidate>
//                 <TextField
//                     id="date"
//                     label="date"
//                     type="date"
//                     defaultValue="none"
//                     className={classes.textField}
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                 />
//             </form>
//             <br />
//             <br />
//         </div>
//         <div className="checkbox_container">
//             <br></br>
//             {goalData.map((val, index) => {
//                 return (
//                     <div key={index}>
//                         {renderCheckbox(val)}
//                     </div>)
//             })}
//         </div>
//         <br></br>
//         <div className="goal_input">
//             <TextField type="input" id="standard-basic" label="goal" onChange={(e) => getValue(e)} />
//             <Button onClick={constructANewGoal} style={{ backgroundColor: "#1B4353", marginLeft: 10 }} className={classes.Button} variant="contained" color="primary">add a goal</Button>
//         </div>
//         <div className="button_container">
//             <Button onClick={submitData} style={{ backgroundColor: "#1B4353", marginLeft: 10 }} className={classes.Button} variant="contained" color="primary">submit</Button>
//         </div>
//     </>
// }
