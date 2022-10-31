import {combineReducers} from "redux";
import postsReducer from "../components/Posts/postsReducer";
import commentsReducer from "../components/Comments/commentsReducer";
import todoReducer from "../components/Todo/todoReducer";


export default combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  todos: todoReducer
},);