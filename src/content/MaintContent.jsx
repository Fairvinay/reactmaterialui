import * as React from "react"

import { Box } from "@material-ui/core"
import { useRef } from "react"
import  useStyles  from '../common/styles'
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'    
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Label }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InputAdornment from '@material-ui/core/InputAdornment';





const MaintContent = (props)  => {
    const [fileSelected, setFileSelected] = React.useState("");
    const [fileObject, setFileObject] = React.useState();
    const [fileUploaded , setFileUploaded] = React.useState();

    const [isValidFilePath, setValidFilePath] = React.useState(false);
 
    // const validate = () => {
    //   let temp = {}
    //    temp.fullName = values.fileName

    //   }
    //const { values , setValues , handleInputChange } = useForm(initialFValues);

    function handleSubmit(event) {
      
      console.log( 'File Selected:', fileSelected); 
      var isValidFilePath = false;
      // ^([a-zA-Z]:)?(\\[^<>:"/\\|?*]+)+\\?$
      isValidFilePath = (fileSelected !=undefined || fileSelected != "") // &&  /^(.+)\\([^\/]+)$/.test(fileSelected)
      console.log( 'isValidFilePath:', isValidFilePath); 
      if ( isValidFilePath)
       { 
        let formData = new FormData();

        formData.append("fileName", fileObject);
         
        
        fetch('http://localhost:3200/loadfile', { method: 'POST', body: formData , 
         
            headers: {
                   
                   'Accept': 'text/html',
                   
                    'X-API-SERVER': '85499f9f'
                },
         }).
      then(response => response.text)
      .then (data => { 
          console.log(data)
            if (data == "test")
            {   setFileUploaded("File Uploaded successfuly "); } 
            setFileUploaded("File Uploaded successfuly "); 
           setValidFilePath(true)
      })
      } 
      else  { 
        setValidFilePath(false)
       }
     // You should see email and password in console.
     // ..code to submit form to backend here...

    }
    const onChangeNew = (file) => {

      console.log(file);
      setFileObject(file)
      setFileSelected(file.name)
      if(file.name)  setValidFilePath(true)
     }
    const onChange = (event) => {
        const fileReader = new FileReader();
        let files =event.target.files,
        value = event.target.value,
        message;
    if( files && files.length > 1 )  message = `${files.length} files selected`;
    else                            message = value.split( '\\' ).pop();

        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = (e) => {
          setFileObject( e.target.result);
          }
        console.log("fileResult " +fileReader.result);
      
    console.log("file details  "+JSON.stringify(files))
    console.log("file value  "+JSON.stringify(value))
        const file = event.dataTransfer ? event.dataTransfer.files[0] : event.currentTarget.files[0];
        console.log("file event dataTransfer  "+JSON.stringify(file))
       let  selectedFile =  event.target.files;
       setFileObject(selectedFile)
       // console.log("file event "+JSON.stringify(event))
        console.log("file event target "+JSON.stringify(selectedFile))
        setFileSelected((message))
        if(message)  setValidFilePath(true)
    }
    

    const uploadInputRef = React.useRef(null);
    const  classes = useStyles();
    return ( <Box component="div" m={1}>
    {/* <Typography variant="h6" gutterBottom classes={classes.h6}>
        h6. Heading
        </Typography> */}

        <h3 className={classes.h6} > File Utilities </h3>

        <Grid container className={classes.root} spacing={2}>
         <Grid item xs={12}>
          <Grid container justify="center" spacing={classes.spacing}>
          <Card className={classes.cardRoot}>
             <CardHeader  title={"File Upload"} className={classes.cardHeaderStylePref}>   </CardHeader>
           <CardContent>
           <Paper className={classes.paper}>
            <form className={classes.container} onSubmit={handleSubmit} > 
                <div style={{width: 'auto' ,  backgroundColor:'white'}}>
                 {/* label="Outlined" variant="outlined" helperText="Incorrect entry." */}
                <TextField className={classes.fileBox} id="standard-basic" label="File" size="small" InputLabelProps={{ shrink: true , color:'grey' }} /> 
                </div>
               <Grid item> 
                  <Button  variant="contained" component="label" className={classes.button} size="small"
                   color="primary" htmlFor="icon-button-file"> 
                     <AttachFileIcon  className={classes.extendedIcon} />
                      <input accept="image/*" type="file" onChange={(e) => { onChangeNew(e.currentTarget.files[0])}}  id="icon-button-file"  className={classes.inputFile} />  
                   </Button>
                    <label style={{marginLeft: '10px', fontSize:'15px'  }} htmlFor="icon-button-file">{fileSelected}</label>
                </Grid>
               <Grid item>  
                   <FormLabel style={{display: ((isValidFilePath) == false ? "block" :'none') , margin:'2px'}}>Choose File </FormLabel>
                </Grid>
             </form>
            </Paper>
           </CardContent>
        <CardActions>
          <Button size="small" type="submit" variant="contained" className={classes.extMargin} color="primary" onClick={handleSubmit} color="primary">Submit</Button>
        
          <FormLabel component="span"  className={classes.succesUpload} style={{display: ((fileUploaded) ? "block" :'none') }}>{fileUploaded}  </FormLabel>
        </CardActions>
    </Card>

          {/* {[0, 1, 2].map((value) => ( */}
            {/* <Grid key={value} item> */}
            
            {/* </Grid> */}
          {/* ))} */}
        </Grid>
      </Grid>
      </Grid>
             
</Box>)

    }

export default MaintContent;

/*
 {<Input  accept=".xlx" name="file" classes={classes.inputFile} type="file" placeholder="Upload Excel file "/> }
              
right one 
https://stackoverflow.com/questions/47523560/file-uplaod-not-working-on-button-click-material-ui-v1-reactjs
https://stackoverflow.com/questions/40589302/how-to-enable-file-upload-on-reacts-material-ui-simple-input
 <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

</label>

 <AttachFileIcon  className={classes.extendedIcon} /> {fileSelected}
    <Input  accept=".xlx" name="file" type="file" style={{ display: 'none', }}
               startAdornment={
                    <InputAdornment position="start">
                    <AttachFileIcon />
                    </InputAdornment>
                }
                />
      <input
                    color="primary"
                    accept="image/*"
                    type="file"
                    onChange={onChange}
                    id="icon-button-file"
                    style={{ display: 'none', }}
                 />
                    <label htmlFor="icon-button-file">
                    <Button
                        variant="contained"
                        component="span"
                        className={classes.button}
                        size="large"
                        color="primary"
                    >
                        <ImageIcon className={classes.extendedIcon} />
          </Button>

    <InputLabel htmlFor="import-button" style={styles.importLabel}>
    <Input
        id="import-button"
        inputProps={{
          accept:
            ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
        }}
        onChange={onInputChange}
        style={styles.hidden}
        type="file"
    />
    Import Spreadsheet

</InputLabel>
https://ansonlowzf.com/how-to-build-a-material-ui-navbar/
https://stackoverflow.com/questions/36255352/reactjs-material-ui-icon-button-to-upload-file

https://stackoverflow.com/questions/56250869/file-name-not-showing-after-selected-a-file

https://stackoverflow.com/questions/40589302/how-to-enable-file-upload-on-reacts-material-ui-simple-input
    */