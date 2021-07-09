import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import { Switch, BrowserRouter as Router , Route, Link } from 'react-router-dom';
import { Link as MuiLink, CssBaseline } from '@material-ui/core';
//import reportWebVitals from './reportWebVitals';

/* 

{title: "About Us", path:"/aboutus"},
    {title:"Product", path:"/product"},
    {title: "Blog", path:"/blog"},
    {title:"faq", path:"/faq"}
   {/*

    
*/

ReactDOM.render(
  <React.StrictMode>
     <Router>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="/dashboard">Dashboard</Link>
         </li>

       </ul>

    <Switch>
      <Route exact path="/">
      <Home />
        </Route>
      <Route path="/about" >
     
      </Route>
      <Route path="/dashboard">
      <Dashboard />
        </Route>
      <Route path="/faq" >
      <Dashboard />
        </Route>
        </Switch>
      </Router>
   
   
    <App />
    <CssBaseline/>
  </React.StrictMode>,
  document.getElementById('root')
);

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
