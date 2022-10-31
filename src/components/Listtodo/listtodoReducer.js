import {LOADING_START_LISTTODO, LOADING_END_LISTTODO, LOADING_ERROR_LISTTODO} from "./asyncActionListtodo";
import initialStore from "../../redux/initialStore";

export default function listtodoReducer(listtodoFromStore = initialStore, {type, error, payload}) {
  switch (type) {
    case LOADING_START_LISTTODO:
      return {
        ...listtodoFromStore,
        loading: true
      };

    case LOADING_END_LISTTODO:
      return {
        ...listtodoFromStore,
        loading: false,
        comments: payload
      }

    case LOADING_ERROR_LISTTODO:
      return {
        ...listtodoFromStore,
        loading: false,
        error
      };
    default:
      return listtodoFromStore;
  }
}