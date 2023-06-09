

export default function InputField({ children, placeholder, value, setState }) {

	const handleInputChange = (e) => {
		setState(e.target.value)
	}

	return (
		<div className="w-1/3">
			<label
				className="font-bold tracking-widest text-gray-500 font-xl "
			>
				{children}
				<input
					className='w-full border-gray-300 border-[1px] rounded p-2 mt-1 text-black focus:border-sky-500 focus:outline-none'
					type='number'
					placeholder={placeholder}
					value={value}
					onChange={handleInputChange}
				/>
			</label>
		</div>
	)
}
