import {combineReducers} from "redux";
import postsReducer from "../components/Posts/postsReducer";
import commentsReducer from "../components/Comments/commentsReducer";
import listReducer from "../components/List/listReducer";


export default combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  list: listReducer,
},);