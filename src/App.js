import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import useStyles from './common/styles'
import MaintContent from './content/MaintContent'
import TableContent from './content/TableContent'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

const Tip = (props ) => {

   return ( <Box component="button" >  Gold Time </Box>)
}; 
   //const classes = useStyles();

function App() {
  
  return (
     <Grid container spacing={2}> 
        <Grid item xs={3}></Grid>
        <Grid item xs={4}> <TableContent/></Grid>
        <Grid item xs={4}> <Tip/></Grid>
     </Grid>
  );
}

export default App;


/*

 <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

*/