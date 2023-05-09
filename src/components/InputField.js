

export default function InputField({ children, placeholder }) {


	return (
		<div className="w-1/3">
			<label
				className="text-gray-500"
			>
				{children}
				<input
					type='number'
					className='w-full border-gray-300 border-[1px] rounded p-2 mt-1 text-black focus:border-sky-500 focus:outline-none'
					placeholder={placeholder}
				/>
			</label>
		</div>
	)
}
