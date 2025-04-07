import React from "react";

const QuoteCard = ({ quoteData: { quote, author } }) => (
	<div className="p-8 rounded-2xl w-full max-w-3xl gap-4 flex flex-col">
		<p className="text-[#160122] text-center text-xl sm:text-2xl md:text-3xl font-medium">
			"{quote}"
		</p>
		<p className="text-[#160122] text-center text-lg sm:text-xl md:text-2xl font-normal">
			— {author}
		</p>
	</div>
);

export default QuoteCard;
