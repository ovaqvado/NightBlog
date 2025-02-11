'use client'
import { token } from '@/api/posts'
import Auth from '@/components/Auth/Auth'
import { toggleLanguage } from '@/lib/features/switchLang/switchSlice'
import { RootState } from '@/lib/store'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.scss'
import SwitchLang from './UI/SwitchLang/SwitchLang'

const Header = () => {
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
	const isAuthenticated = token
	const dispatch = useDispatch()
	const isRussian = useSelector((state: RootState) => state.language.isRussian)

	const handleProfileClick = () => {
		if (!isAuthenticated) {
			setIsAuthModalOpen(true)
		} else {
			redirect('/profile')
		}
	}

	const closeModal = () => {
		setIsAuthModalOpen(false)
	}

	return (
		<>
			<header className={styles.header}>
				<div className={styles.links}>
					<Link href='/' className={styles.link}>
						{isRussian ? 'Home' : 'Главная'}
					</Link>
					<Link href='/news' className={styles.link}>
						{isRussian ? 'News' : 'Новости'}
					</Link>
					<Link href='/users' className={styles.link}>
						{isRussian ? 'Users' : 'Пользователи'}
					</Link>
				</div>
				<Link className={styles.logo_container} href='/'>
					<p className={styles.logo_text}>NightBlog</p>
				</Link>
				<div className={styles.links}>
					<button
						className={styles.btn_profile_header}
						onClick={handleProfileClick}
					>
						{isRussian ? 'Profile' : 'Профиль'}
					</button>
					<SwitchLang toggleLanguage={() => dispatch(toggleLanguage())} />
				</div>
			</header>
			<Auth isOpen={isAuthModalOpen} closeModal={closeModal} />
		</>
	)
}

export default Header
