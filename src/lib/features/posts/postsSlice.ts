import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllPosts } from '../api/posts'
import { Posts } from '../type/type'

interface PostsState {
	posts: Posts[]
	loading: boolean
	error: string | null
}

const initialState: PostsState = {
	posts: [],
	loading: false,
	error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await getAllPosts()
	return response
})

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchPosts.pending, state => {
				state.loading = true
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.loading = false
				state.posts = action.payload
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Something went wrong'
			})
	},
})

export default postsSlice.reducer
