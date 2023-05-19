export default function MyButton({children, handleClick, className, disabled}) {
	return (
		<button type={"submit"} disabled={disabled} onClick={handleClick} className={`inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 active:bg-blue-800/75 ${className}`}>
			{children}
		</button>
	)
}