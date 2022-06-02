import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='myH1' onClick={()=> {navigate('/')}} >HOME</h1>
      <p className='myPar' >Blog Page</p>
    </div>
  )
}

export default Blog