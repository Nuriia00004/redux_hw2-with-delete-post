import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const DeletePostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const deletePost = async () => {
    try {
      const response = await axios.delete(`https://dummyjson.com/posts/${id}`);

      if (response.status >= 200 && response.status <= 204) {
        console.log("пост удален");

        navigate("/");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  // const cancelDelete = () => {
  //     navigate(`posts/${id}`)
  // }

  return (
    <div>
      <h1>Вы действительно хотите удалить пост</h1>
      <button onClick={deletePost}>Да удалить</button>
      <NavLink to={`/`}>
        <button>Нет</button>
      </NavLink>
    </div>
  );
};

export default DeletePostPage;
