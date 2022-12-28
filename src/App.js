import Signup from "./components/Signup";
import Login from "./components/Login";
import ReactDOM from 'react-dom'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Welcome from "./components/Welcome";
import CreateBlog from "./components/CreateBlog";
import AllBlogs from "./components/AllBlogs";
import { useState, useEffect } from "react";
import MyBlog from "./components/MyBlog";
import UpdateBlog from "./components/UpdateBlog";
function App() {
  const [email, setEmail] = useState("")
  useEffect(() => {
    const fetchedEmail=localStorage.getItem("Email")
    setEmail(fetchedEmail)
    console.log(fetchedEmail)
    
  }, [])
  
  return (
    <div>
   <BrowserRouter>
      
       <Routes>

        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/createBlog' element={<CreateBlog Email={email}/>}/>
        <Route path='/allBlog' element={<AllBlogs/>}/>
        <Route path='/myBlog' element={<MyBlog Email={email}/>}/>
        <Route path='/update' element={<UpdateBlog/>}/>
        
       
       </Routes>
       
      </BrowserRouter>
    
    </div>
  );
}

export default App;
