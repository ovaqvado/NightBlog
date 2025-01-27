type Props = {
	params: {
		slug: number
	}
}

export default function SettingsId({ params: { slug } }: Props) {
	return <div>SettingsId{slug}</div>
}
