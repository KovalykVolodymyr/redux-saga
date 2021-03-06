import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/action'
import Post from './Post'
import Loader from './Loader'

const FethcedPosts = () => {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fechedPosts)
  const loading = useSelector(state => state.app.loading)

  if(loading){
    return <Loader/>
  }

  if(!posts.length){
    return <button 
      className="btn btn-primary"
      onClick={()=> dispatch(fetchPosts())}
    >Download</button>
  }

  return posts.map(post => <Post post={post} key={post.id}/>)
}

export default FethcedPosts
