import React, {useState} from 'react'
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'TypeScript', body: 'Description'},
        {id: 3, title: 'React', body: 'Description'}]);

  return (
    <div className="App">
        <form>
            <input type="text" placeholder="Post Description"/>
            <input type="text" placeholder="Post Description"/>
            <MyButton disabled>
                Create
            </MyButton>
        </form>
        <PostList posts={posts} title={"List of posts"}/>
    </div>
  );
}

export default App;
