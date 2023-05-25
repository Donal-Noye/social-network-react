import {ErrorMessage} from "formik";

export default function MyInput({
    field,
	  focus,
	  className,
		type,
    isValid,
	  ...props
  }) {
	return (
		<>
			<input
				autoFocus={focus}
				{...field}
				{...props}
				className={`${isValid ? "" : "border-red-500 focus:border-red-500"} w-full block px-2 py-1 text-sm text-white bg-dark-blue rounded-lg border border-gray-700 transition-colors focus:ring-blue-500 focus:border-blue-200 outline-0 ${className}`}
				type={type} />
			<ErrorMessage className="mt-1 text-sm text-red-500" name={field.name} component="div" />
		</>
	)
}