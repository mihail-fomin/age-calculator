import InputField from "./InputField";


export default function Form() {


	return (
		<form className="flex justify-between gap-2">
			<InputField
				placeholder='DD'
			>
				Day
			</InputField>
			<InputField
				placeholder='MM'
			>
				Month
			</InputField>
			<InputField
				placeholder='YYYY'
			>
				Year
			</InputField>
		</form>
	)
}