
import * as React from "react"
import Radio from '@material-ui/core/Radio';
import { Input, makeStyles, withStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { FormHelperText  } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import  useStyles  from '../common/tableStyles'
// https://stackoverflow.com/questions/50436542/how-to-override-styles-for-material-ui-textfield-component-without-using-the-mui

function NumberHeaders(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <td key={number}>{number}</td>  );  return (
          listItems );
  }

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number,i) => 
     <tr key={number}><td>{number}</td>
     <td>{i}</td></tr>);  return (
         listItems );
  }
const TableContent = (props) => {
  //  const styled = window.styled.default;

   /* const Chat = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background: #276DBD;
`; */
    const numbers = [1,2,3,4]; 
    const mapNum  = {}; 
    const salary= 12.12;
    const getIncome = (evt) => { var val = evt.target.value; var noDolor = val.replace("$","") ;
    evt.target.value ="$" + noDolor;} ;
    const [tableState, setTableState] = React.useState({married:'',graduated:''});
    const headList = [ 'SRNO' ,  'VALUES']; 
    const [single, setSingle] = React.useState('YES');

     const handleSingle = (event, newStatus) => {
        setSingle(newStatus);
        console.log("Single "+newStatus);
    };
    const handleEducation = (event, newStatus) => {
        tableState.graduated = newStatus;
        console.log("graduated "+newStatus);
    };
    const handleWork = (event, newStatus) => {
       tableState.selfworking = newStatus;
      console.log("working "+newStatus);
  };
    const tableHeaders = headList.map( (el) => 
        <td> {el}</td>
    );
    //console.log(" heasers ", JSON.stringify(tableHeaders))
    const listNumbers = numbers.map( (el) => 
                 <tr> <td> {el} </td>
                 <td> {el}</td>
           </tr>
      
    );
    const classes  = useStyles();
    return ( 
        <>
         <table> 
             <tbody>
             <tr><NumberHeaders numbers={headList}/></tr>
             <NumberList numbers={numbers}/>
             </tbody>
         </table>
       
         <Grid container spacing={2} className={`${classes.gridLayout} ${classes.root}`} > 
          <Grid item  xs={12} md={4}>
            <TextField InputProps={{classes: {root: classes.textField}}}
             InputLabelProps={{
                classes: {
                  root: classes.labelIncome
                 
                }
              }} margin="normal"
                  label="Income"
                 onChange={getIncome}
                />
          </Grid>
          <Grid item xs={12} md={4}>
            <div>
              <p className={classes.formText} >Are you married?</p> 
              <ToggleButtonGroup value={single} exclusive  onChange={handleSingle} aria-label="Yes">
                 <ToggleButton value="Yes" aria-label="Yes">
                          Yes
                 </ToggleButton>
                 <ToggleButton value="No" aria-label="No">
                          No
                 </ToggleButton>
              </ToggleButtonGroup>
            </div>
          
          </Grid>
          <Grid item xs={12} md={4}>
            <div>
            <p className={classes.formText}>Finished education?</p> 
            <ToggleButtonGroup value={tableState.graduated} exclusive  onChange={handleEducation} aria-label="Yes">
                 <ToggleButton value="Yes" aria-label="Yes"  checked={tableState.graduated === "yes"}>
                          Yes
                 </ToggleButton>
                 <ToggleButton value="No" aria-label="No" checked={tableState.graduated === "no"}>
                          No
                 </ToggleButton>
            </ToggleButtonGroup>
           
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
          <div>
            <p className={classes.formText}>Self-employed?</p> 
            <ToggleButtonGroup value={tableState.selfworking} exclusive  onChange={handleWork} aria-label="Yes">
                 <ToggleButton value="Yes" aria-label="Yes"  checked={tableState.selfworking === "yes"}>
                          Yes
                 </ToggleButton>
                 <ToggleButton value="No" aria-label="No" checked={tableState.selfworking === "no"}>
                          No
                 </ToggleButton>
            </ToggleButtonGroup>
           
           </div>
           </Grid>
           <Grid item xs={12} md={4}>
           <FormHelperText className={classes.formText}>Monthly income($)?</FormHelperText >
            <TextField
           
            onChange={getIncome}
            />
            
            </Grid>
            <Grid item xs={12} md={4}>
            <FormHelperText className={classes.formText} >Coappliant's monthly income($)?</FormHelperText >
              <TextField onChange={getIncome} />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField label="Loan Amount($)"  InputProps={{classes: {root: classes.textLoan}}}  InputLabelProps={{
                classes: {
                  root: classes.labelLoan
                 
                }
              }} onChange={getIncome} />
             </Grid>
            <Grid item xs={12} md={4}>
            <FormHelperText className={classes.formText} >Loan amount($) in thousands?</FormHelperText >
            <TextField
            className="outlinedText"
            
            onChange={getIncome}
            />
           
            </Grid>
            <Grid item xs={12} md={4}>
            <FormHelperText className={classes.formText} >Term of loan in months?</FormHelperText >
            <Select
            label="Credit Score"
            placeholder=""
            options={['300-579', '580-669', '670-739', '740-799', '800-850']}
            />

            <Select
            label="Property Area"
            placeholder=""
            options={['Urban', 'Semi-urban', 'Rural']}
            />
             </Grid>
           
        </Grid>
    
        </>
   )

};

export default TableContent;

/* 
{["SR", "VALUES"].map(item =>
                        <td key={item}>{item}</td>
                    )}</tr>
               {[1,2,3,4].map(item =>
                    <tr key={item}><td>{item}</td><td>{item}</td></tr>
                    )}
<div className={classes.root}>
    </div>
 <Radio
                value="yes"
                checked={tableState.graduated === "yes"}
                onChange={evt => setTableState({graduated: evt.target.value})}>
                Yes
            </Radio>
            <Radio
                value="no"
                checked={tableState.graduated === "no"}
                onChange={evt => setTableState({graduated: evt.target.value})}>
                No
            </Radio>
 <Radio
                value="yes"
                checked={tableState.graduated === "yes"}
                onChange={evt => setTableState({graduated: evt.target.value})}>
                Yes
            </Radio>
            <Radio
                value="no"
                checked={tableState.graduated === "no"}
                onChange={evt => setTableState({graduated: evt.target.value})}>
                No
            </Radio>
 <Select
            label="Gender"
            placeholder=""
            options={['Male', 'Female']}
            > 
       
                </Select>
 { listNumbers.forEach( (t) => { 
                 return (<tr> <td> {t} </td>
                    <td> {t}</td>
              </tr>)
              })}
<Radio
                    value="yes"
                    checked={tableState.married === "yes"}
                    onChange={evt => setTableState({married: evt.target.value})}>
                    Yes
                </Radio>
                <Radio
                    value="no"
                    checked={tableState.married === "no"}
                    onChange={evt => setTableState({married: evt.target.value})}>
                    No
                    </Radio>

*/