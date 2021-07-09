
import { Input, makeStyles, withStyles } from '@material-ui/core';
//https://stackoverflow.com/questions/61345362/material-ui-makestyles-how-to-style-by-tag-name
const useStyles  = makeStyles( (props ) => (
    {root: {
     margin:'10, 5, 5,5 ',
      maxWidth: '500px', //this is arbitrary, you need to find here what is the best value for you
      display: 'flex',
      flexWrap: 'wrap', 
      
     
      '& .MuiGrid-item ': {
        padding: '2px'
      } ,
      '& .MuiToggleButton-root': {  
        color: 'rgba(23, 13, 451, 0.38)',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        padding: '8px'
      },
      '& .MuiToggleButton:hover': {
        textDecoration: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
        }
       
    }
   
 , gridLayout: { 
    borderRadius : '5px' ,
    borderColor : '#3104e4',
    backgroundColor : '#ffff',
    //fontFamily:`"Roboto", "Helvetica", "Arial", sans-serif`
    
 },
 labelIncome: {
  fontSize: 12,
  color: "red",
  marginTop : 'none',
  "&$labelFocused": {
    color: "purple"
  }
},
labelLoan: {
  fontSize: 12,
  color: "red",
  marginTop : 'none',
  "&$labelFocused": {
    color: "purple"
  }
},
textLoan : {
  marginTop: '36px',
 
 },
 textField : {
  marginTop: '46px',
 
 },
  formText: {
    font: 'Open Sans',    
    fontStyle: 'normal',
     fontSize: '0.9em'
  
}}
))

export default useStyles;

/* 
 '& .MuiInput-formControl': { 
    
    'label': { 
      marginTop: '46px'
    }
  },
  */