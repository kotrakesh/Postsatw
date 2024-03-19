// src/routes.tsx
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/posts/PostList'));
const PostDetails = lazy(() => import('./components/posts/PostDetails'));
const CreatePost = lazy(() => import('./components/posts/PostAdd'));
const EditPost = lazy(() => import('./components/posts/PostEdit'));


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<PostDetails />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/edit/:id" element={<EditPost/>} />
    </Routes>
  );
};

export default AppRoutes;