import { useState, useEffect } from "react";
import Button from "./components/Button";
import QuoteCard from "./components/QuoteCard";
import Loading from "./components/Loading";
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

function App() {
	const [quoteData, setQuoteData] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchQuote = async () => {
		setLoading(true);
		try {
			const res = await fetch(
				"https://quotes15.p.rapidapi.com/quotes/random/?language_code=pt",
				{
					method: "GET",
					headers: {
						"X-RapidAPI-Host": "quotes15.p.rapidapi.com",
						"X-RapidAPI-Key": apiKey,
					},
				}
			);
			const data = await res.json();

			if (data?.content && data?.originator?.name) {
				setQuoteData({
					quote: data.content,
					author: data.originator.name,
				});
			}
		} catch (error) {
			console.error("Erro ao buscar citação:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<div className="bg-[#e4c1f9] h-full w-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center relative">
			<div className="gap-4 flex flex-col">
				{loading ? (
					<Loading />
				) : (
					quoteData?.quote &&
					quoteData?.author && <QuoteCard quoteData={quoteData} />
				)}
			</div>
			<Button onClick={fetchQuote} disabled={loading} />
		</div>
	);
}

export default App;
