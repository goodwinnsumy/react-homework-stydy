import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LoadingActionListtodo} from "./asyncActionListtodo";
import {DotLoader} from "react-spinners";
import "./listTodo.scss"

const Listtodo = (props) => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(LoadingActionListtodo())
  },[])

  const listtodo = useSelector((store)=>store.listtodo);

  const listtodoMap = listtodo.listtodo.map((todo) => {
    return <p className={"todos"} key={todo.id}> {todo.title} </p>
  })

  const styleSpinerListtodo ={
    display: "block",
    margin: "250px 500px"
  };

  return (
    <div>
      {listtodo.loading ? <DotLoader color="#7936d6" size={50} cssOverride={styleSpinerListtodo} /> : listtodoMap}
    </div>
  );
}

export default Listtodo;