import InputField from "./InputField";
import { useDispatch, useSelector } from 'react-redux';
import { setDay, setMonth, setYear } from '../store/formSlice'


export default function Form() {
	const { day, month, year } = useSelector(state => state.formState);



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