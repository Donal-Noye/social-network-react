import Preloader from "../common/Preloader";
import Paginator from "../common/Paginator";
import User from "./User";

export default function Users(
	{
		currentPage,
		onPageChanged,
		totalUsersCount,
		pageSize,
		isFetching,
		users,
		followingInProgress,
		follow,
		unfollow,
	}) {
	return (
		<>
			<Paginator currentPage={currentPage}
			           onPageChanged={onPageChanged}
			           totalItemsCount={totalUsersCount}
			           pageSize={pageSize}
			/>
			{isFetching
				? <Preloader/>
				: <>
					<div className="grid grid-cols-3 gap-6 my-5">
						{users.map(user => {
							return (
								<User
									key={user.id}
									user={user}
									followingInProgress={followingInProgress}
									follow={follow}
									unfollow={unfollow}
								/>
							)
						})}
					</div>
					<Paginator currentPage={currentPage}
					           onPageChanged={onPageChanged}
					           totalUsersCount={totalUsersCount}
					           pageSize={pageSize}
					/>
				</>
			}
		</>
	)
}