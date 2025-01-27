// Здесь api к постам
import axios from 'axios'

async function getAllPosts() {
	const response = await axios.get('https://dummyjson.com/posts')
	const data = response.data.posts
	return data
}

export { getAllPosts, token }

const token = false
