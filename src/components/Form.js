// import input from "./input";
// import { useDispatch, useSelector } from 'react-redux';
// import { setDay, setMonth, setYear } from '../store/formSlice'

import InputField from "./InputField";


export default function Form({
	day,
	month,
	year,
	setDay,
	setMonth,
	setYear
}) {
	// const { day, month, year } = useSelector(state => state.formState);


	return (
		<form className="flex justify-between gap-2">
			<InputField
				placeholder='DD'
				value={day}
				setState={setDay}
			>
				Day
			</InputField>
			<InputField
				placeholder='MM'
				value={month}
				setState={setMonth}
			>
				Month
			</InputField>
			<InputField
				placeholder='YYYY'
				value={year}
				setState={setYear}
			>
				Year
			</InputField>
		</form>
	)
}