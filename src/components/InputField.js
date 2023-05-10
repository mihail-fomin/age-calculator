import { useDispatch, useSelector } from 'react-redux';


export default function InputField({ children, placeholder, value, setState }) {
	const dispatch = useDispatch();


	return (
		<div className="w-1/3">
			<label
				className="text-gray-500"
			>
				{children}
				<input
					className='w-full border-gray-300 border-[1px] rounded p-2 mt-1 text-black focus:border-sky-500 focus:outline-none'
					type='number'
					placeholder={placeholder}
					value={value}
					onChange={() => dispatch(setState(e.target.value))}
				/>
			</label>
		</div>
	)
}
