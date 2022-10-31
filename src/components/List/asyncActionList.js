import axios from "axios";

export const LOADING_START_LIST = "LOADING_START_LIST"
export const LOADING_END_LIST = "LOADING_END_LIST"
export const LOADING_ERROR_LIST = "LOADING_ERROR_LIST"

export function LoadingActionList() {

  return (dispatch) =>{
    dispatch({type: LOADING_START_LIST});

    setTimeout (timeoutHandlerList, 3500)

    function timeoutHandlerList (){
      axios ('https://jsonplaceholder.typicode.com/todos')
        .then(respon => {
            dispatch ({
              type: LOADING_END_LIST,
              payload: respon.data

            })
          }
        )
        .catch(error => {
          dispatch ({type: LOADING_ERROR_LIST, error})
        })
    }
  }
}