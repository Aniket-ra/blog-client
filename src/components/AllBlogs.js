import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useEffect,useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import axios from "axios";
import Welcome from './Welcome';



export default function AllBlogs() {
  const[blog,setBlog]=useState("")
  useEffect(()=>{
  const fetchdata= async()=>{
    const data= await axios.get("http://localhost:5000/allBlog")
    console.log(data);
    setBlog(data)
  };
  fetchdata();
  },[])

  return (
    <>
    <Welcome/>
    {
    blog && blog?.data.map((blogs,index) =>(
      <div key={`post${index}`} style={{"marginTop":"2rem","marginLeft":"25rem"}}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          
          title={blogs.Title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={blogs.Image}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {blogs.Description}
          </Typography>
        </CardContent>
          
      
      </Card>
      </div>
    ))}
      
  
    
    </>
  );
}