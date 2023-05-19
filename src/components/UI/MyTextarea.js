import TextareaAutosize from "react-textarea-autosize";
import {ErrorMessage} from "formik";

export default function MyTextarea(
	{
		field,
		placeholder,
		className,
		valid,
		...props
	}) {
	return (
		<>
			<TextareaAutosize
				{...field}
				{...props}
				minRows={3}
				maxRows={20}
				className={`resize-none block p-2.5 pb-3.5 w-full text-sm text-white bg-dark-blue rounded-lg border border-gray-700 transition-colors focus:ring-blue-500 focus:border-blue-200 outline-0 ${props.className}`}
				placeholder="Write your thoughts here..."
			/>
			<ErrorMessage className="mt-1 text-sm text-red-500" name={field.name} component="div" />
		</>
	)
}