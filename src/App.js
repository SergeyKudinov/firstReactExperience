import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import PostItem from './components/PostItem';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // Получаем post дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;