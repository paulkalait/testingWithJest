import * as types from'../../actions/types'


 const reducer = (state = { posts: []}, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return action.payload;
            default: 
            return state;
    }
}
export default reducer