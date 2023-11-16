import React, {useRef, useState} from 'react'
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'TypeScript', body: 'Description'},
        {id: 3, title: 'React', body: 'Description'}]);
    const [title, setTitle] = useState('');
    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(bodyInputRef.current.value);
    }

  return (
    <div className="App">
        <form>
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="Post Description"
            />
            <MyInput type="text" placeholder="Post Description"/>
            <MyButton
                onClick={addNewPost}
            >
                Create
            </MyButton>
        </form>
        <PostList posts={posts} title={"List of posts"}/>
    </div>
  );
}

export default App;
