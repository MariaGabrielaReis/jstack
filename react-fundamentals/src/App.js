import React from "react";

import { Header } from "./Header";
import { Post } from "./Post";

export function App() {
  return (
    <>
      <Header subtitle="Posts da semana" />

      <Post likes={64} post={{ title: "Título 1", subtitle: "Subtítulo 1" }} />
      <Post likes={21} post={{ title: "Título 2", subtitle: "Subtítulo 2" }} />
      <Post likes={7} post={{ title: "Título 3" }} />
    </>
  );
}
