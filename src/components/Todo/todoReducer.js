import initialStore from "../../redux/initialStore";
import {LOADING_TODO} from "./asyncActionTodo";

export default function todoReducer(todosFromStore = initialStore.todos, {type, payload}) {
  switch (type) {
    case LOADING_TODO:
      return {
        ...todosFromStore,
        loading: true,
        todos: payload
      };
    default:
      return todosFromStore;
  }
}