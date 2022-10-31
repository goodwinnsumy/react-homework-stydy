import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LoadedActionPosts} from "./asyncActionPosts";
import "./Post.scss"
import {RingLoader} from "react-spinners";

const Posts = (props) => {

  // componentDidMount() {
  //     // axios('https://jsonplaceholder.typicode.com/posts')
  //     //   .then(res => console.log(res))
  //
  // }

  const dispatch = useDispatch();

  // const [count, setCount] = useState(0);

  // console.log("qqqqq")

  useEffect(()=>{
    // setCount(count+1)
    dispatch(LoadedActionPosts())

    // return ()=> console.log("bye")
  },[])

  const posts = useSelector((store)=>store.posts);

  // const {posts, dispatch} = this.props

  const postsMap = posts?.posts?.map((post, i) => {
    return <p className={"p"} key={post.id}>{post.title} </p>
  })

  const styleSpinerPosts = {
    display: "block",
    margin: "0 auto",
    // borderColor: "red",
  };

  return (
    <div>

      {posts?.loading ? <RingLoader color="#36d7b7" size={200} cssOverride={styleSpinerPosts}/> : postsMap}
      {/*{loading ? <Loader/> : postsMap}*/}
    </div>
  );

}

export default Posts;