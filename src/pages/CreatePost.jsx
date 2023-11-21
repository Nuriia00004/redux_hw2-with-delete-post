import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [inputData, setInputData] = useState("");

  const navigate = useNavigate();
    const handleCreatePost = () => {
        axios.post("https://dummyjson.com/posts/add",
        {
            title: inputData,
            userId: 1,
        }   
        )
            .then(() => {
                navigate('/')
                console.log('Post added successfully');
      })
            .catch((err) => {
          console.error(err);
      });
  };
  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create Post</button>

      <div></div>
    </div>
  );
};

export default CreatePost;
