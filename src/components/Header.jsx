import * as React from "react"
import { AppBar , Toolbar } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { Home, PersonPinSharp } from "@material-ui/icons"
import  useStyles  from '../common/styles'
import { withRouter } from 'react-router-dom'
import {   List  ,ListItem ,ListItemText } from  '@material-ui/core'
import { Container } from "@material-ui/core"

const navLinks = [ 
 
    {title: "About Us", path:"/aboutus"},
    {title:"Product", path:"/product"},
    {title: "Blog", path:"/blog"},
    {title:"faq", path:"/faq"}
]   
 
const Header = (props)  => {
    const  classes = useStyles();
    const [ anchorE , setAnchorE] = React.useState(null);
    console.log(props)
    const { history }  = props
    //console.log(" Classes "+ JSON.stringify(useStyles))
    console.log(" Classes "+ JSON.stringify(classes))
    const handleMenuClick = pageUrl => {
        history.push(pageUrl)
        setAnchorE(null)
    }
    return (
        <AppBar position="static" >
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
            </IconButton>
            
            <Container className={classes.navbarDisplayFlex}>
            
           <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>

               { navLinks.map(({title , path}) => (
                   <a href={path} key={title}  className={classes.linkText}>
                       <ListItem button onClick={ () => handleMenuClick(path) }> 
                          <ListItemText primary={title}/>
                       </ListItem>
                   </a>
               ))

               }
           </List>
           </Container>
            </Toolbar>
        </AppBar>
    )
}


export default withRouter(Header)


