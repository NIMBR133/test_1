import axios from "axios"

export const setData = (posts, author) => ({
    type: 'SET_DATA',
    payload: {posts, author}
})

export const setLoading = (isLoading) => ({
    type: 'SET_LOADING',
    payload: isLoading
})

export const fetchData = () => {
    return (dispatch) => {
        dispatch(setLoading(true))
        Promise.all([
            axios.get('http://jsonplaceholder.typicode.com/posts'),
            axios.get('http://jsonplaceholder.typicode.com/users')
        ]).then(([posts, author]) => dispatch(setData(posts.data, author.data)))
            .then(() => dispatch(setLoading(false)))
    }
}