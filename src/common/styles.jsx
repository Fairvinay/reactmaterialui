import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ( {
  root: {
    '& > *': {
     width: '100%',
     maxWidth:600,
     fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
     fontStyle: 'normal',
    },  
    '[class^="PrivateNotchedOutline"]': {
      width: '1ch',
    }, 

    '& .MuiTextField-root .MuiOutlinedInput-input': {
      margin: theme.spacing(1),
      width: '5ch',
      height: '3px'
    },
  },
  fileBox : { 
    marginBottom:'12px', backgroundColor:'silver', height: '23px'
  }, 
  inputFile: {
    textAlign: 'left',
	filter:'alpha(opacity: 0)',
	opacity: 0,
    zIndex: 2,
    width: '2px'
  },
  container:  { 
    //  border: '1px solid blue',
    //  borderColor: '#ececec',
    // borderRadius:'4px',
    // boxShadow: '2px 2px 2px #888888'
  }, 
  h6: { 
    marginLeft : '20px',
    font: 'Open Sans',    
    fontStyle: 'normal',
    // fontSize: '14px',
    // fontWeight: '300',
    // marginBottom: '10px',
    color: '#0d0684',
    border: '1px solid blue',
    borderColor: '#ececec',
    borderRadius:'4px',
    boxShadow: '2px 2px 2px #888888'
  }, 
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
      display:"flex",
      justifyContent: "space-between",

  },
  linkText : {
      textDecoration: "none",
      textTransform: "uppercase",
      color:"white",
      fontSize:"10px",
      textShadow: '1px 1px 2px #b6bcda;' 
  },
  gridRoot: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: '100%',
  },
  control: {
    padding: theme.spacing(2),
  },
  /* Card title detials  */
  cardRoot: {
    width: '100%',
    maxWidth: 300,
    marginLeft:'20px;'
 },
  cardHeader: { 
     color: "white",
     backgroundColor : "blue",
     borderColor:'#ececec',
     
  }, 
  cardHeaderStylePref: {
    background: 'linear-gradient(to right bottom, #3f51b5, #697ce2)',
    color: '#ececec',
    height: 30,
    padding: 0
  },
  extMargin  : {
    width: '0.3rem',
    height: '0.8rem',
    fontSize: '0.6rem'
  },
  succesUpload: {
    color: '#65E73C' , 
    fontWeight: 'bold',
     textShadow: '1px 1px 1px rgba(170 225 60  0.5), ' +
                '2px -2px 0 rgba(255, 255, 255, 0.9)' ,
    fontSize:'14px',
    // textShadow: '0px 2px 3px rgba(255,255,255,0.5)',
  '-webkit-background-clip': 'text',
     '-moz-background-clip': 'text',
          'background-clip': 'text',
         // 1px 3px 2px rgb(122 0 0 / 50%), 2px -2px 0 rgb(255 255 255 / 0%)
  },
  button: { 
    color: "white",

  },
  extendedIcon : {
    fontSize: 'small'
  },
  
  inputFile3: {
     width: '50%',


  },
  title: {
     
  }
 // https://stackoverflow.com/questions/35247529/css-embossed-inset-text
}));

export default useStyles;

/*
import React from 'react';  needed in styles.jsx else in oanther jsx it will not  work 
*/
