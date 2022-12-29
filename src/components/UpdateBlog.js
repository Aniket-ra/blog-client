import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios from "axios";
import Welcome from './Welcome';
import {Box, InputLabel, TextField, Typography, Button} from '@mui/material';
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function UpdateBlog(props) {
  //console.log("createBlog",Email);
 const location = useLocation()
 const Id = location.state?.data;
//   const { Id } = location.state
  const [blog, setBlog] = useState("")
  console.log(Id)
 
  const fetchdata = async () => {
   
    const newdata=await axios.post("https://blog-app-server-8x7l.onrender.com/myBlog/id", {Id})
    setBlog(newdata)
    console.log(newdata)
  };
  useEffect(() => {
    
    fetchdata();
  }, [])
  const [input, setInput] = useState({
    Title: blog.Title,
    Description: blog.Description,
    Image: blog.Image
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
  const  submitHandler=async()=> {
    await axios.post("https://blog-app-server-8x7l.onrender.com/myBlog/update", { Id,Title:input.Title,Description:input.Description,Image:input.Image})
     
   
  }
  return (
    <>
      <Welcome />
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
                    <TextField  name="Title" onChange={handleChange1} value={input.Title} fullWidth={true} margin='auto' variant="outlined"/>
                    <InputLabel>  Description</InputLabel>
                    <TextField  name="Description"onChange={handleChange1} value={input.Description} fullWidth={true} margin='auto' variant="outlined"/>
                    <InputLabel > ImageURL</InputLabel>
                    <TextField  name="Image" onChange={handleChange1} value={input.Image} fullWidth={true} margin='auto' variant="outlined"/>
                    <Button variant="contained" fullWidth={true} onClick={submitHandler} >
                            Update My Blog
                        </Button>
            </Box>
            </form>
      



    </>
  );
}
