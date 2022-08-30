import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import PostItem from './components/post_item';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';
import MyInput from './components/UI/input/MyInput';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  };

  return (
    <div className='App'>
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder='Название поста' />

        {/* Неуправляемый, неконтролируемый компонент */}
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;