'use client'

interface SwitchLangProps {
	toggleLanguage: () => void
}

import styles from './SwitchLang.module.scss'
export default function SwitchLang({ toggleLanguage }: SwitchLangProps) {
	return (
		<div className={styles.switch}>
			<input
				id='language-toggle'
				className={`${styles.check_toggle} ${styles.check_toggle_round_flat}`}
				type='checkbox'
				onChange={toggleLanguage}
			/>
			<label htmlFor='language-toggle'></label>
			<span className={styles.on}>RU</span>
			<span className={styles.off}>EN</span>
		</div>
	)
}
