import {combineReducers} from "redux";
import postsReducer from "../components/Posts/postsReducer";
import commentsReducer from "../components/Comments/commentsReducer";
import listtodoReducer from "../components/Listtodo/listtodoReducer";


export default combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  listtodo: listtodoReducer,
},);