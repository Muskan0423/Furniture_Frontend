import React, { useEffect } from 'react'
import {useRecoilState} from 'recoil'
import { BlogState } from '../State/atoms/Blogstate'

const Blog = () => {
    const [Blog, setBlog]=useRecoilState(BlogState)
    useEffect(()=>{
        const fetchBlogs=async()=>{
            const response=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data=await response.json()
            console.log(data,"posts");
            setBlog(data)
        }
        fetchBlogs()
    },[setBlog])
   
  return (
         <div>
      <p>Blog</p>
    </div>
   
  )
}

export default Blog
