import React,{useEffect} from 'react'
import "./welcome.css"
import createBlog from './CreateBlog'
import {Link , useNavigate} from 'react-router-dom'
export default function Welcome() {
  
  return (
    <div>
    <div className='nav'>
    <ul  className="navul">
  <li className="nav-item1">
    <h2 style={{"marginTop":"0%"}}>BlogApp</h2>
  </li>
    <div className='main1'>
      <li>
      <Link to='/myBlog' style={{textDecoration : 'none'}}>MyBlogs</Link>
      </li>
      <li>
      <Link to='/allBlog' style={{textDecoration : 'none'}}>AllBlogs</Link>
      </li>
      <li>
      <Link to='/createBlog' style={{textDecoration : 'none'}}>Create Blog</Link>
      </li>
      </div>
   
  <li className="nav-item" style={{"marginLeft":"32rem"}} >
    <button onClick={localStorage.clear}>
  <Link to='/login'>Signout</Link>
  </button>
    {/* <a className="nav-link" href="#" style={{"textDecoration":"none"}} >signout</a> */}
  </li>
  </ul>
  
  

</div>
    </div>
  )
}
