import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import PostItem from './components/post_item';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])

  return (
    <div className='App'>
      <form>
        <input type="text" placeholder='Название поста' />
        <input type="text" placeholder='Описание поста' />
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
