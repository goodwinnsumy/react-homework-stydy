import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Todo from "../Todo/Todo";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Comments from "../Comments/Comments";
import Posts from "../Posts/Posts";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="comments" element={<Comments/>}/>
          <Route path="posts" element={<Posts/>}/>
          <Route path="todo" element={<Todo/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
