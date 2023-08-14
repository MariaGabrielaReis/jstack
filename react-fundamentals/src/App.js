import React, { useState } from "react";

import { Header } from "./Header";
import { Post } from "./Post";

export function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Título 1",
      subtitle: "Subtítulo 1",
      likes: 64,
      read: false,
    },
    {
      id: Math.random(),
      title: "Título 2",
      subtitle: "Subtítulo 2",
      likes: 21,
      read: true,
    },
    { id: Math.random(), title: "Título 3", likes: 7, read: false },
  ]);

  function handleRefresh() {
    setPosts(prevState => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título ${posts.length + 1}`,
        subtitle: `Subtítulo ${posts.length + 1}`,
        likes: posts.length + 1,
        read: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts(prevState => prevState.filter(post => post.id !== postId));
  }

  return (
    <>
      <Header subtitle="Posts da semana">
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            id: post.id,
            title: post.title,
            subtitle: post.subtitle,
            likes: post.likes,
            read: post.read,
          }}
          onRemove={handleRemovePost}
        />
      ))}
    </>
  );
}
