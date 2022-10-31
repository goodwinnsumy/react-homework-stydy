import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TodoAction} from "./asyncActionTodo";
import "./todo.scss"


const Todo = (props) => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(TodoAction())
  },[])

  const todos = useSelector((store)=> store.todos);

  const todosMap = todos.todos.map((todo)=> {
    return <ul className={"todo"} key={todo.id}> <li>{todo.title}</li> </ul>
  })


  return (
    <div>
      {todosMap}
    </div>
  );
};

export default Todo;