import './App.css';
import {Component} from "react";
import Comments from "./components/Comments/Comments";
import Posts from "./components/Posts/Posts";
import List from "./components/List/List";

class App extends Component {

  state = {
    arr: [1, 2, 3, 4, 5, 6, "qw", "adsf"],
    visibleCounter: true
  }

  arrAddHandler(el) {
    let arr = this.state.arr
    arr.push(el)
    this.setState({arr})
    console.log(arr)
  }

  render() {

    // const hello = "Доброго вечора!!!",
    //   hello1 = {a: 1, s: 4},
    //   visible = false;

    return (

      <>
        <List/>
        {/*<Posts/>*/}
        {/*<Comments/>*/}
      </>
    );
  }

}

export default App;
