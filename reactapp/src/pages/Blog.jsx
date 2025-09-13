import { useEffect, useState } from "react";
import styles from "../assets/css/Blog.module.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editPostId, setEditPostId] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=6"
        );
        if (!res.ok) throw new Error("Data not found");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const addPost = () => {
    if (!newPost.title.trim() || !newPost.body.trim()) return;
    const newEntry = { id: Date.now(), ...newPost };
    setPosts([newEntry, ...posts]);
    setNewPost({ title: "", body: "" });
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const startEdit = (post) => {
    setEditPostId(post.id);
    setNewPost({ title: post.title, body: post.body });
  };

  const saveEdit = () => {
    setPosts(
      posts.map((post) =>
        post.id === editPostId ? { ...post, ...newPost } : post
      )
    );
    setEditPostId(null);
    setNewPost({ title: "", body: "" });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1>Blog</h1>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        {editPostId ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={addPost}>Add</button>
        )}
      </div>

      <div className={styles.postList}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className={styles.actions}>
              <button onClick={() => deletePost(post.id)}>Delete</button>
              <button onClick={() => startEdit(post)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
