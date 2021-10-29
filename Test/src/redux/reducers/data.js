const initialState = {
    cards: [],
    isLoading: false
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA': {
            const {author, posts} = action.payload
            return {
                ...state,
                cards: posts.map(item => ({
                    ...item, author: author[Math.floor(Math.random() * author.length)].name
                }))
            }
        }
        
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
            
        default:
            return state
    }
}

export default data