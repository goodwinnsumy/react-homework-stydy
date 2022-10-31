import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LoadingActionComments} from "./asyncActionComments";
import {RiseLoader} from "react-spinners";
import "./Comments.scss"

const Comments = (props) => {

  const dispatch = useDispatch();

  useEffect(()=>{
    // setCount(count+1)
    dispatch(LoadingActionComments())
  },[])

  const comments = useSelector((store)=>store.comments);

    const commentsMap = comments.comments.map((comment) => {
      return <div className={"comments"} key={comment.id}>
        <p> {comment.name}  </p>
        <p> {comment.email} </p>
        <p> {comment.body}  </p>
      </div>
    })

    const styleSpinerComments ={
      display: "block",
      margin: "250px 500px"
    };

    return (
      <div>
        {comments.loading ? <RiseLoader color="#7936d6" size={50} cssOverride={styleSpinerComments} /> : commentsMap}
      </div>
    );
  }

export default Comments;

// class Comments extends Component {
//
//   componentDidMount() {
//     this.props.dispatch(LoadingActionComments())
//   }
//
//   render() {
//     const {comments, dispatch} = this.props
//     const commentsMap = comments.comments.map((comment) => {
//       return <div className={"comments"} key={comment.id}>
//         <p> {comment.name}  </p>
//         <p> {comment.email} </p>
//         <p> {comment.body}  </p>
//       </div>
//     })
//
//     const styleSpinerComments ={
//       display: "block",
//       margin: "250px 500px"
//     };
//
//     return (
//       <div>
//         {comments.loading ? <RiseLoader color="#7936d6" size={50} cssOverride={styleSpinerComments} /> : commentsMap}
//       </div>
//     );
//   }
// }
//
// function mapStateToPropsComments(store) {
//   return {
//     comments: store.comments
//   }
// }
//
// export default connect(mapStateToPropsComments)(Comments);

