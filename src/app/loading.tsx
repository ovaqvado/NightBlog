import styles from './Loader.module.scss'

export default function loading() {
	return (
		<div id='container'>
			<div className={styles.spinner}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
