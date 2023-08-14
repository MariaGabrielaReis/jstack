import React from "react";
import { Post } from "./Post";

export function App() {
  return (
    <>
      <h1>Meu blog</h1>
      <h2>Posts da semana</h2>
      <hr />

      <Post post={{ title: "Título 1", subtitle: "Subtítulo 1" }} />
      <Post post={{ title: "Título 2", subtitle: "Subtítulo 2" }} />
      <Post post={{ title: "Título 3" }} />
    </>
  );
}
