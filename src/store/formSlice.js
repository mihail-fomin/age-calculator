import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	day: '',
	month: '',
	year: ''
}

const formSlice = createSlice({
	name: 'formState',
	initialState,
	reducers: {
		setDay: (state, action) => {
			state.day = action.payload;
		},
		setMonth: (state, action) => {
			state.month = action.payload;
		},
		setYear: (state, action) => {
			state.year = action.payload;
		},
		resetForm: (state) => {
			state.day = '';
			state.month = '';
			state.year = '';
		}
	}
});

export const { setDay, setMonth, setYear, resetForm } = formSlice.actions;

export default formSlice.reducer;