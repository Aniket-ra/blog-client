import React from 'react'
import {Box, InputLabel, TextField, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom'
import Welcome from './Welcome';
import { useState } from 'react';
export default function CreateBlog({Email}) {
     console.log("createBlog",Email);
    const [input, setInput] = useState({
        Title: "",
        Description: "",
        Image: "",
        userId:""
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
          Title:input.Title,
          Description:input.Description,
          Image:input.Image
        }
        fetch("https://blog-app-server-8x7l.onrender.com/createBlog",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application.json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                Title:input.Title,
              Description:input.Description,
            Image:input.Image,
            userId:Email
            }),
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data,"blogDetails");
        });
    
    
    }




    return (
        <div>
            <Welcome/>
            <form style={{"width":"50rem","margin":"auto", "marginTop":"4rem"}}>
                <Box
                border={3}
                borderColor="linear-gradient(90deg,rgba(58,75,180,1) 2%, rgba(116,49,110)"
                borderRadius={10}
                boxShadow="10px 10px 20px #ccc"
                padding={3}
                margin={"auto"}
                marginTop={3}
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
                width={"80%"}
                height={"100%"}
                >
                <Typography
                fontWeight={"bold"}
                padding={3}
                color="grey"
                variant='h2'
                textAlign={"center"}>
                    Post Your Blog
                    </Typography>
                    <InputLabel > Title</InputLabel>
                    <TextField name="Title" onChange={handleChange1} value={input.Title} fullWidth={true} margin='auto' variant="outlined"/>
                    <InputLabel>  Description</InputLabel>
                    <TextField  name="Description"onChange={handleChange1} value={input.Description} fullWidth={true} margin='auto' variant="outlined"/>
                    <InputLabel > ImageURL</InputLabel>
                    <TextField  name="Image" onChange={handleChange1} value={input.Image} fullWidth={true} margin='auto' variant="outlined"/>
                    <Button variant="contained" fullWidth={true} onClick={submitHandler} >
                    <Link to="/myBlog"   style={{textDecoration : 'none'}}>Post My Blog</Link>
                        </Button>
            </Box>
            </form>
        </div>
    )
}
