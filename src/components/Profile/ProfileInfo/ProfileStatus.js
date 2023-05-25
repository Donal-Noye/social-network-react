import {HiPencil} from "react-icons/hi";
import {useEffect, useState} from "react";

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect((prevProps) => {
		setStatus(props.status)
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)

		props.updateStatus(status);
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<>
			{!editMode &&
				<div className="flex items-center gap-2">
					<p className={`${props.className} text-sm text-gray-400`}>{props.status || "-----"}</p>
					{props.isOwner &&
						<div onClick={activateEditMode}
              className="p-1.5 -m-1.5 cursor-pointer rounded-full hover:bg-light-blue/50 transition-colors"
						>
							<HiPencil size={18}/>
						</div>
					}
				</div>
			}
			{editMode &&
				<input
					className={"block px-2 py-1 text-sm text-white bg-dark-blue rounded-lg border border-gray-700 transition-colors focus:ring-blue-500 focus:border-blue-200 outline-0"}
					onChange={onStatusChange}
					autoFocus={true}
					onBlur={deactivateEditMode}
					value={status}/>
			}
		</>
	)
}

export default ProfileStatus