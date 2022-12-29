import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import axios from "axios";
import Welcome from './Welcome';
import {Link} from 'react-router-dom';



export default function MyBlog(Email) {
  //console.log("createBlog",Email);
  const [blog, setBlog] = useState("")
  const userId = Email;
  const fetchdata = async () => {
    const data = await axios.post("https://blog-app-server-8x7l.onrender.com/myBlog", { userId })
    console.log(data);
    setBlog(data)
  };
  useEffect(() => {
    
    fetchdata();
  }, [])

  const  Delete=async(Id)=> {
    console.log(Id);
    await axios.post("https://blog-app-server-8x7l.onrender.com/myBlog/delete", { Id })
    fetchdata();
  }
  const Update=async(Id)=>{
    const data=await axios.post("http://localhost:5000/myBlog/update", { Id })

    fetchdata();
  }
  return (
    <>
      <Welcome />
      {
        blog && blog?.data.map((blogs, index) => (
          <div key={`post${index}`} style={{ "marginTop": "2rem", "marginLeft": "25rem" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }

                title={blogs.Title}
                subheader="September 14"
              />
              <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "end" }}>
                <button onClick={()=>Delete(blogs._id)} type="button" className="btn btn-danger">Delete</button>
                <button  type="button" className="btn btn-danger"><Link to="/update" state={{data:blogs._id}}   style={{textDecoration : 'none'}}>Update</Link></button>
              </div>

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
