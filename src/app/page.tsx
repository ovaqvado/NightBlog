'use client'
// Images
import comment from '@/public/comment.svg'
import image from '@/public/image.jpeg'
import like from '@/public/like.svg'
import saved from '@/public/saved.svg'
import { Posts } from '@/type/type'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
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

	return (
		<div className={styles.home}>
			<div className={styles.all_posts_container}>
				{posts.map(post => (
					<div key={post.id} className={styles.post_box}>
						<div className={styles.header_post}>
							<Link href='/profile' className={styles.user_img_nickname}>
								<Image
									className={styles.image_user}
									src={image}
									width={35}
									height={35}
									alt='img_profile'
								/>
								<p className={styles.nickname_user}>Josh Tyson</p>
							</Link>
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
								<button className={styles.btn_like}>
									<Image src={like} alt='like_btn' />
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
