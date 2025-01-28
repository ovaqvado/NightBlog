import { createSlice } from '@reduxjs/toolkit'

interface LanguageState {
	isRussian: boolean
}

const initialState: LanguageState = { isRussian: true }

const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		toggleLanguage(state) {
			state.isRussian = !state.isRussian

			if (typeof window !== 'undefined') {
				localStorage.setItem('inRussian', JSON.stringify(state.isRussian))
			}
		},
		setLanguage(state, action) {
			state.isRussian = action.payload

			if (typeof window !== 'undefined') {
				localStorage.setItem('inRussian', JSON.stringify(action.payload))
			}
		},
	},
})

export const { toggleLanguage, setLanguage } = languageSlice.actions
export default languageSlice.reducer
