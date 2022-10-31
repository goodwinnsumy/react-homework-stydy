import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LoadingActionListtodo} from "./asyncActionList";
import {DotLoader} from "react-spinners";
import "./list.scss"

const List = (props) => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(LoadingActionList())
  },[])

  const list = useSelector((store)=>store.list);

  const listMap = list.list.map((todo) => {
    return <p className={"todos"} key={todo.id}> {todo.title} </p>
  })

  const styleSpinerList ={
    display: "block",
    margin: "250px 500px"
  };

  return (
    <div>
      {list.loading ? <DotLoader color="#7936d6" size={50} cssOverride={styleSpinerList} /> : listMap}
    </div>
  );
}

export default List;