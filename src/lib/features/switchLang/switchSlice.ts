import { createSlice } from '@reduxjs/toolkit'

interface LanguageState {
	isRussian: boolean
}

const initialState: LanguageState = {
	isRussian: true,
}

const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		toggleLanguage(state) {
			state.isRussian = !state.isRussian
		},
	},
})

export const { toggleLanguage } = languageSlice.actions
export default languageSlice.reducer
