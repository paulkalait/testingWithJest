import * as types from './types'
import axios from 'axios'

export const fetchPosts = () => async (dispatch) => {
    try {
       const data =  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
       console.log(data)
        dispatch({
            type: types.GET_POSTS,
            payload: data.data
        })
    } catch (error) {
        console.log(error);
    }
   

    // .then(res => {
        
    // })
    // .catch(err => {
    //     console.log(err);
    // })
};
