import {LOADING_START_LIST, LOADING_END_LIST, LOADING_ERROR_LIST} from "./asyncActionList";
import initialStore from "../../redux/initialStore";

export default function listReducer(listFromStore = initialStore, {type, error, payload}) {
  switch (type) {
    case LOADING_START_LIST:
      return {
        ...listFromStore,
        loading: true
      };

    case LOADING_END_LIST:
      return {
        ...listFromStore,
        loading: false,
        comments: payload
      }

    case LOADING_ERROR_LIST:
      return {
        ...listFromStore,
        loading: false,
        error
      };
    default:
      return listFromStore;
  }
}