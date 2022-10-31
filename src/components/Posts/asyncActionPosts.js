import axios from "axios";

export const LOADING_START_POSTS ="LOADING_START_POSTS"
export const LOADING_END_POSTS ="LOADING_END_POSTS"
export const LOADING_ERROR_POSTS ="LOADING_ERROR_POSTS"

export function LoadedActionPosts() {

    return (dispatch) => {
        dispatch({type: LOADING_START_POSTS});

        setTimeout(timeoutHandler,1000)

        function timeoutHandler(){

            axios('https://jsonplaceholder.typicode.com/posts')
              .then(res => {
                  dispatch({
                      type: LOADING_END_POSTS,
                      payload: res.data
                  })
              })
              .catch(error => {
                  dispatch({type: LOADING_ERROR_POSTS, error})
              })
        }
    }
}