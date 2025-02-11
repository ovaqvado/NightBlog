'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './users.module.scss'

type User = {
	id: number
	firstName: string
	lastName: string
	image: string
	address: address
}
type address = {
	city: string
	state: string
}

type UsersResponse = {
	users: User[]
}

export default function Page() {
	const [users, setUsers] = useState<User[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get<UsersResponse>(
					'https://dummyjson.com/users'
				)
				setUsers(response.data.users)
			} catch (err) {
				setError(
					err instanceof Error ? err.message : 'An unknown error occurred'
				)
			} finally {
				setLoading(false)
			}
		}
		fetchUsers()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<div className={styles.users_box}>
			<p className={styles.title_users}>Пользователи</p>
			<ul className={styles.users_container}>
				{users.map(user => (
					<li key={user.id}>
						<Link className={styles.user_box} href={`/users/${user.id}`}>
							<Image
								className={styles.user_image}
								width={200}
								height={200}
								src={user.image}
								alt='user'
							/>
							<div className={styles.about_user}>
								<p className={styles.user_name}>
									{user.firstName} {user.lastName}
								</p>
								<p className={styles.user_state}>
									{user.address.state},{user.address.city}
								</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
