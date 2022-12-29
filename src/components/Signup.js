import React,{useState} from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { createUseStyles } from 'react-jss'
import "./signup.css"
import {Link} from 'react-router-dom'
export default function Signup() {
    const [input, setInput] = useState({
        Name: "",
        Email: "",
        Password: ""
      });
      function handleChange1(e) {
        // console.log(e.target.value)
        const { name, value } = e.target;
        setInput((previnput) => {
          return {
            ...previnput,
            [name]: value,
          };
        });
        //console.log(input)
      }
      function submitHandler(e) {
        e.preventDefault();
        const newNote={
          Name:input.Name,
          Email:input.Email,
          Password:input.Password
        }
        fetch("https://blog-app-server-8x7l.onrender.com/",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application.json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                Name:input.Name,
                Email:input.Email,
                Password:input.Password
            }),
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data,"userDetails");
            if(data.status=="ok"){
                alert("Signin succesfully")
                
                 window.location.href="./welcome";
                

            }
                
                

            
        });
    
    
    }
    return (
        <div className="signupWrapper">
            <div className="signupCard">
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="subtitle1" >
                            Sign up to see Blogs and Create Your Own 
                        </Typography>
                        <TextField
                            onChange={handleChange1}
                            name="Email"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            margin="dense"
                            fullWidth={true}
                            size="small" 
                            value={input.Email}/>
                        <TextField
                        onChange={handleChange1}
                        name="Password"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            margin="dense"
                            fullWidth={true}
                            size="small" 
                            value={input.Password}/>
                        <TextField
                        onChange={handleChange1}
                        name="Name"
                            id="outlined-basic"
                            label="Full Name"
                            variant="outlined"
                            margin="dense"
                            fullWidth={true}
                            size="small"
                            value={input.Name} />
                        <Typography
                            variant="subtitle1"
                            margin="dense">
                            By signing up, you agree to our Terms , Privacy Policy and Cookies
                            Policy .
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" fullWidth={true} onClick={submitHandler}>
                            Sign Up
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} >
                    <Typography>
                        Have an Account?{" "}
                        <Link to='/login' style={{textDecoration : 'none'}}>Login</Link>

                    </Typography>
                </Card>
            </div>
        </div>
    )
}
