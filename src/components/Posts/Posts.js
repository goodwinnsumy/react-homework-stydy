import React, {Component} from 'react';
import {connect} from "react-redux";
import {LoadedAction} from "./asyncAction";
import "./Post.scss"
import {RingLoader} from "react-spinners";

class Posts extends Component {

    componentDidMount() {
        // axios('https://jsonplaceholder.typicode.com/posts')
        //   .then(res => console.log(res))
        this.props.dispatch(LoadedAction())
    }

    render() {
        const {posts, dispatch} = this.props

        const postsMap = posts.posts.map((post,i) => {
            return <p className={"p"} key={post.id}>{ post.title } </p>
        })

        const styleSpiner = {
            display: "block",
            margin: "0 auto",
            // borderColor: "red",
        };

        return (
          <div>
              {posts.loading ? <RingLoader color="#36d7b7" size={200} cssOverride={styleSpiner} /> : postsMap}
          </div>
        );
    }
}

function mapStateToProps(store) {
    return{
        posts: store.posts
    }
}

export default connect(mapStateToProps)(Posts);



