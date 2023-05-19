import {useState} from "react";
import MyButton from "../UI/MyButton";

export default function Paginator({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) {
	const pagesCount = Math.ceil(totalItemsCount / pageSize)

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let curP = currentPage;
	let curPF = ((curP - 6) < 0) ? 0 : curP - 6;
	let curPL = curP + 6;
	let slicedPages = pages.slice(curPF, curPL);

	return (
		<div className="flex items-center justify-center gap-2 pag w-4/5 mx-auto my-0">
			{slicedPages.map(page => {
					return <button
						key={page}
						onClick={() => {onPageChanged(page)}}
						className={`px-4 py-1 border-2 border-light-blue rounded-xl hover:bg-light-blue transition-colors ${currentPage === page && "bg-light-blue"}`}>{page}</button>
				})}
		</div>
	)
}