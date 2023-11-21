import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        SetPosts(response.data.posts);
        console.log(response.data.posts);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {posts.map((post) => (
          <div key={post.id}>
            <li >{post.body}</li>
            <Link to={`deletePosts/${post.id}/`}>Delete Post</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
