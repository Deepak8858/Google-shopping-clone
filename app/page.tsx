import Link from "next/link";

const SEARCHES = [
	{
		id: 1,
		term: "Monitors over ₹50000",
		url: "/search/monitors?sort_by=r&min_price=50000",
		color: "bg-blue-500",
	},
	{
		id: 2,
		term: "iPhone 14 Pro Max",
		url: "/search/iphone 14 pro max",
		color: "bg-red-500",
	},
	{
		id: 3,
		term: "Macbook Pro",
		url: "/search/macbook",
		color: "bg-yellow-500",
	},
	{
		id: 4,
		term: "Aipods Pro",
		url: "/search/airpods",
		color: "bg-green-500",
	},
	{
		id: 5,
		term: "Tablets under ₹30000",
		url: "/search/tablets?sort_by=r&max_price=30000",
		color: "bg-purple-500",
	},
];

export default function Home() {
	return (
		<main className="p-10 pt-0 text-center md:text-left">
			<h1 className="text-3xl font-extralight mb-5">
				Welcome to Google Shopping
			</h1>
			<h2 className="mb-5">
				Get started by clicking on one of the example search items or typing in
				an item yourself above!
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-5 mt-5">
				{SEARCHES.map((search) => (
					<Link
						prefetch={false}
						key={search.id}
						href={search.url}
						className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`}>
						{search.term}
					</Link>
				))}
			</div>
		</main>
	);
}
