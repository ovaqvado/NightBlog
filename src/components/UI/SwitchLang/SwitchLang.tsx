'use client'

import {
	setLanguage,
	toggleLanguage,
} from '@/lib/features/switchLang/switchSlice'
import { RootState } from '@/lib/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './SwitchLang.module.scss'

export default function SwitchLang() {
	const dispatch = useDispatch()
	const isRussian = useSelector((state: RootState) => state.language.isRussian)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedLanguage = localStorage.getItem('inRussian')
			if (savedLanguage !== null) {
				dispatch(setLanguage(JSON.parse(savedLanguage)))
			}
		}
	}, [dispatch])

	const handleToggleLanguage = () => {
		dispatch(toggleLanguage())
	}

	return (
		<div className={styles.switch}>
			<input
				id='language-toggle'
				className={`${styles.check_toggle} ${styles.check_toggle_round_flat}`}
				type='checkbox'
				checked={isRussian}
				onChange={handleToggleLanguage}
			/>
			<label htmlFor='language-toggle'></label>
			<span className={styles.on}>RU</span>
			<span className={styles.off}>EN</span>
		</div>
	)
}
