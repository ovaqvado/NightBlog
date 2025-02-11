// 'use client'
// import axios from 'axios'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'
// import styles from '../users.module.scss'

// type UserProfile = {
// 	id: number
// 	firstName: string
// 	lastName: string
// 	email: string
// }

// export default function UserProfilePage() {
// 	const router = useRouter()
// 	const [user, setUser] = useState<UserProfile | null>(null)
// 	const [loading, setLoading] = useState(true)
// 	const [error, setError] = useState<string | null>(null)

// 	useEffect(() => {
// 		const { id } = useRouter()
// 		const fetchUserProfile = async () => {
// 			if (id) {
// 				try {
// 					const response = await axios.get<UserProfile>(
// 						`https://dummyjson.com/users/${id}`
// 					)
// 					setUser(response.data)
// 				} catch (err) {
// 					setError(
// 						err instanceof Error ? err.message : 'An unknown error occurred'
// 					)
// 				} finally {
// 					setLoading(false)
// 				}
// 			}
// 		}
// 		fetchUserProfile()
// 	}, [router.query])

// 	if (loading) {
// 		return <div>Loading...</div>
// 	}
// 	if (error) {
// 		return <div>Error: {error}</div>
// 	}
// 	if (!user) {
// 		return <div>User not found</div>
// 	}
// 	return (
// 		<div className={styles.userProfile}>
// 			<h1>
// 				{user.firstName} {user.lastName}
// 			</h1>
// 			<p>Email: {user.email}</p>
// 		</div>
// 	)
// }
