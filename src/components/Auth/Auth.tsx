import Inputs from '../UI/Inputs/Inputs'
import styles from './Auth.module.scss'

interface ModalProps {
	isOpen: boolean
	closeModal: () => void
}

const Auth = ({ isOpen, closeModal }: ModalProps) => {
	if (!isOpen) return null

	return (
		<div className={styles.auth_container} onClick={closeModal}>
			<div className={styles.auth_content} onClick={e => e.stopPropagation()}>
				<button className={styles.close_auth} onClick={closeModal}>
					x
				</button>
				<form className={styles.form} action=''>
					<h3 className={styles.name_form}>Зарегистрироваться</h3>
					<Inputs />
					<span className={styles.text_reg_log}>
						<p className={styles.text_ask}>Уже есть аккаунт?</p>
						<button className={styles.change_reg_log}>Войдите</button>
					</span>
					<button className={styles.btn_send_form_auth} type='submit'>
						Зарегистрироваться
					</button>
				</form>
			</div>
		</div>
	)
}

export default Auth
