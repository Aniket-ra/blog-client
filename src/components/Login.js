import React,{seState} from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { createUseStyles } from 'react-jss'
import {Link} from 'react-router-dom'
import "./signup.css";
import { useState } from "react";
export default function Login(data) {
    const [input, setInput] = useState({
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
          Email:input.Email,
          Password:input.Password
        }
        fetch("http://localhost:5000/login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application.json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                Email:input.Email,
                Password:input.Password
            }),
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data,"userDetails");
            if(data.status=="ok"){
                alert("login succesfully")
                window.localStorage.setItem("token",data.data.token);
                window.localStorage.setItem("Email",data.data.Email);
                console.log(data)
                 window.location.href="./welcome";
                

            }
        });
        
    
    
    }
  return (
    <div>
        <div className="signupWrapper">
            <div className="signupCard">
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="subtitle1" >
                            Login in to see photos and videos from your friends
                        </Typography>
                        <TextField
                            onChange={handleChange1}
                            name="Email"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            margin="dense"
                            fullWidth={true}
                            size="small" />
                        <TextField
                        onChange={handleChange1}
                        name="Password"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            margin="dense"
                            fullWidth={true}
                            size="small" 
                            />
                        
                        <Typography
                            variant="subtitle1"
                            margin="dense">
                            By signing up, you agree to our Terms , Privacy Policy and Cookies
                            Policy .
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" fullWidth={true} onClick={submitHandler} >
                        Login
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} >
                    <Typography>
                        Don't Have an Account?{" "}

                        <Link to='/' style={{textDecoration : 'none'}}>Sign up</Link>

                    </Typography>
                </Card>
            </div>
    </div>
    </div>
  )
}

