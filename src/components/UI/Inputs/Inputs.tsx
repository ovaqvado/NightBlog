'use client'
import eye from '@/public/eye.svg'
import eye_off from '@/public/eye_off.svg'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Inputs.module.scss'

export default function Inputs() {
	const [password, setPassword] = useState<string>('')
	const [repeatPass, setRepeatPass] = useState<string>('')
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault() // предотвращаем перезагрузку страницы
		setShowPassword(!showPassword)
	}

	const passwordsMatch = password === repeatPass

	return (
		<div className={styles.inputs}>
			<div className={styles.input_box}>
				<label className={styles.label} htmlFor='email'>
					Email
				</label>
				<input
					className={styles.input}
					type='email'
					placeholder='newemail@gmail.com'
				/>
			</div>
			<div className={styles.input_box}>
				<label className={styles.label} htmlFor='firstName'>
					Имя
				</label>
				<input className={styles.input} type='text' placeholder='Имя' />
			</div>
			<div className={styles.input_box}>
				<label className={styles.label} htmlFor='lastName'>
					Фамилия
				</label>
				<input className={styles.input} type='text' placeholder='Фамилия' />
			</div>
			<div className={styles.input_box}>
				<label className={styles.label} htmlFor='password'>
					Пароль
				</label>
				<div className={styles.password_wrapper}>
					<input
						className={styles.input_pass}
						type={showPassword ? 'text' : 'password'}
						placeholder='********'
						onChange={e => setPassword(e.target.value)}
					/>
					<button
						className={styles.btn_show_hide_pass}
						type='button'
						onClick={handleClick}
					>
						<Image
							className={styles.show_hide_pass_image}
							src={showPassword ? eye : eye_off}
							alt='Toggle password visibility'
						/>
					</button>
				</div>
			</div>
			<div className={styles.input_box}>
				<label className={styles.label} htmlFor='repeatPassword'>
					Повторите пароль
				</label>
				<div className={styles.password_wrapper}>
					<input
						className={styles.input_pass}
						type={showPassword ? 'text' : 'password'}
						placeholder='********'
						onChange={e => setRepeatPass(e.target.value)}
					/>
				</div>
			</div>
			{!passwordsMatch && repeatPass && (
				<div className={styles.error_message}>Пароли не совпадают</div>
			)}
		</div>
	)
}
