import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FetchPosts from "./components/FetchPosts";
import AxiosPosts from "./components/AxiosPosts";
import PostManager from "./components/PostManager";
import PostLoader from "./components/PostLoader";
import PostViewer from "./components/PostViewer";

function App() {
  return (
    <BrowserRouter>
      {/* 1 - GET com Axios e Fetch */}
      <h1>GET com Axios e Fetch</h1>
      <div>
        <Link to="/fetch-posts">Fetch Posts</Link>
        <Link to="/axios-posts">Axios Posts</Link>
      </div>
      {/* 2 - Continuando requisições - POST E UPDATE/PUT */}
      <div>
        <Link to="/posts">Gerenciar posts</Link>
      </div>
      {/* 3 - Tratamento de erros */}
      <div>
        <Link to="/post/1">Carregar Post 1</Link>
      </div>
      <div>
        <Link to="/post/999">Carregar Post 999</Link>
      </div>
      {/* 4 - Custom hook com API */}
      <div>
        <Link to="/post/view/2">Carregar Post 2</Link>
      </div>
      <Routes>
        {/* 1 - GET com Axios e Fetch */}
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/axios-posts" element={<AxiosPosts />} />
        {/* 2 - Continuando requisições - POST E UPDATE/PUT */}
        <Route path="/posts" element={<PostManager />} />
        {/* 3 - Tratamento de erros */}
        <Route path="/post/:postId" element={<PostLoader />} />
        {/* 4 - Custom hook com API  */}
        <Route path="/post/view/:postId" element={<PostViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
