import {LOADING_END_POSTS, LOADING_ERROR_POSTS, LOADING_START_POSTS} from "./asyncActionPosts";
import initialStore from "../../redux/initialStore";


export default function postsReducer(postsFromStore=initialStore.posts, {type, error, payload}) {
    switch (type) {
        case LOADING_START_POSTS:
            return {
                ...postsFromStore,
                loading: true
            };

        case LOADING_END_POSTS:
            return {
                ...postsFromStore,
                loading: false,
                posts: payload
            };
        case LOADING_ERROR_POSTS:
            return {
                ...postsFromStore,
                loading: false,
                error
            };
        default:
            return postsFromStore;
    }
}