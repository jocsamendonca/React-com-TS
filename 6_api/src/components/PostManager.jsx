import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./Postform";

const PostManager = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSuccess = (post, operation) => {
    if (operation === "add") {
      setPosts((currentPosts) => [post, ...currentPosts]);
    } else if (operation === "update") {
      setPosts((currentPosts) =>
        currentPosts.map((p) => (p.id === post.id ? post : p))
      );
    } else if (operation === "delete") {
      setPosts((currentPosts) => currentPosts.filter((p) => p.id !== post.id));
      setSelectedPost(null);
    }
    setIsEditing(false);
  };

  useEffect(() => {
    const axiosPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data.slice(0, 5));
      } catch (error) {
        setError(error.mensage);
      }
    };

    axiosPosts();
  }, []);

  const handleEdit = (post) => {
    setSelectedPost(post);
    setIsEditing(true);
  };

  const handleCalcelEdit = (post) => {
    setSelectedPost(null);
    setIsEditing(false);
  };

  // Refatorar o código acima e converter em uma única função

  return (
    <div>
      <h1>Gerenciar posts</h1>
      <PostForm
        post={isEditing ? selectedPost : null}
        onSuccess={handleSuccess}
      />
      {isEditing && <button onClick={handleCalcelEdit}>Cancelar edição</button>}
      <h2>Postagens</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => handleEdit(post)}>Editar</button>
        </div>
      ))}
    </div>
  );
};

export default PostManager;
