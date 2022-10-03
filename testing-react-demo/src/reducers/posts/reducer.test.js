import * as types from '../../actions/types'
import postsReducer from './reducer'

describe("Testing Posts reducer", () => {
    it("Should return default state", () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual({posts: []})
    });

    it("Should return new state if receiving type", () => {
        const posts =[{ title: "test"}, { title: "test"}, { title: "test"}]
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        })
        expect(newState).toEqual(posts)
    })
});