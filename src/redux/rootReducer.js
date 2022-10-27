import {combineReducers} from "redux";
import counterReducer from "../components/ReduxCounter/counterReducer";
// import titleReducer from "../components/Header/titleReducer";
// import listReducer from "../components/List/listReducer";
import postsReducer from "../components/Posts/postsReducer";
import commentsReducer from "../components/Comments/commentsReduser";


export default combineReducers({
  // auth: authReducer,
  // title: titleReducer,
  counter: counterReducer,
  // list: listReducer,
  posts: postsReducer,
  comments: commentsReducer

},);