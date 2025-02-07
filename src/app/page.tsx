'use client'
// Images
import comment from '@/public/comment.svg'
import image from '@/public/image.jpeg'
import saved from '@/public/saved.svg'
import { Posts } from '@/type/type'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'

export default function Home() {
	const [posts, setPosts] = useState<Posts[]>([])

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get('https://dummyjson.com/posts')
				const data = response.data.posts
				setPosts(data)
			} catch (error: Error | unknown) {
				console.log('error', error)
			}
		}
		fetchData()
	}, [])
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div className={styles.home}>
			<div className={styles.all_posts_container}>
				{posts.map(post => (
					<div key={post.id} className={styles.post_box}>
						<div className={styles.header_post}>
							<div className={styles.user_img_nickname}>
								<Image
									className={styles.image_user}
									src={image}
									width={35}
									height={35}
									alt='img_profile'
								/>
								<p className={styles.nickname_user}>Josh Tyson</p>
							</div>
							<button className={styles.btn_follow}>Follow</button>
						</div>
						<Image className={styles.post_image} src={image} alt='photo' />
						<div className={styles.post_info}>
							<span className={styles.post_info_text}>
								<p className={styles.post_title}>Title:</p>
								<p className={styles.post_title_text}>{post.title}</p>
							</span>
							<span className={styles.post_info_text}>
								<p className={styles.post_body}>Body:</p>
								<p className={styles.post_body_text}>{post.body}</p>
							</span>
						</div>
						<div className={styles.buttons_view}>
							<div className={styles.view_box}>
								<p className={styles.view}>1023 view</p>
							</div>
							<div className={styles.btn_like_com_sav}>
								<button
									className={styles.btn_like}
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
								>
									<svg
										className={styles.btn_like_image}
										width='20'
										height='18'
										viewBox='0 0 20 18'
										fill={isHovered ? 'red' : 'none'}
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clipPath='url(#clip0_30789_32157)'>
											<path
												d='M10 4.15428C8 -0.540161 1 -0.0401611 1 5.95987C1 11.9599 10 16.9601 10 16.9601C10 16.9601 19 11.9599 19 5.95987C19 -0.0401611 12 -0.540161 10 4.15428Z'
												stroke={isHovered ? 'red' : '#818181'}
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</g>
										<defs>
											<clipPath id='clip0_30789_32157'>
												<rect width='20' height='18' fill='white' />
											</clipPath>
										</defs>
									</svg>
								</button>
								<button className={styles.btn_com}>
									<Image
										className={styles.btn_com_image}
										src={comment}
										alt='comment'
									/>
								</button>
								<button className={styles.btn_saved}>
									<Image
										className={styles.btn_saved_image}
										src={saved}
										alt='image_saved'
									/>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
