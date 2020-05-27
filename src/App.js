import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FethcedPosts from './components/FethcedPosts';

function App() {


  return (
    <div className="container pt-3">
      <div className='row' >
        <div  className='col'>
          <PostForm/>
        </div>
      </div>
      <div className='row'>
        <div className="col">
          <h2>Posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Async Posts</h2>
          <FethcedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
