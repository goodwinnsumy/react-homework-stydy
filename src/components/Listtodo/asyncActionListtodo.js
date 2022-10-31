import axios from "axios";

export const LOADING_START_LISTTODO = "LOADING_START_LISTTODO"
export const LOADING_END_LISTTODO = "LOADING_END_LISTTODO"
export const LOADING_ERROR_LISTTODO = "LOADING_ERROR_LISTTODO"

export function LoadingActionListtodo() {

  return (dispatch) =>{
    dispatch({type: LOADING_START_LISTTODO});

    setTimeout (timeoutHandlerListtodo, 3500)

    function timeoutHandlerListtodo (){
      axios ('https://jsonplaceholder.typicode.com/todos')
        .then(respon => {
            dispatch ({
              type: LOADING_END_LISTTODO,
              payload: respon.data

            })
          }
        )
        .catch(error => {
          dispatch ({type: LOADING_ERROR_LISTTODO, error})
        })
    }
  }
}