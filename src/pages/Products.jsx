import { useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import ProductItem from "../components/ProductItem";
import "./products.css";
import { match } from "../data/utils";


const Products = () => {
	const toothbrushes = useLoaderData();
	console.log("toothbrushes: ", toothbrushes);

	const [searchText, setSearchText] = useState("");

	const calculateValue = () =>
		searchText === ""
			? toothbrushes
			: toothbrushes.filter((t) => match(searchText, t.name));

	const matchingToothbrushes = useMemo(calculateValue, [
		searchText,
		toothbrushes
	]);

	return (
		<div className="products">
			<h2> Vårt sortiment: </h2>

			<div className="search">
				<input
					type="text"
					value={searchText}
					onChange={(event) => setSearchText(event.target.value)}
				/>{" "}
				🔍 
			</div>

			<div className="product-list">
				{matchingToothbrushes.map((t) => (
					<ProductItem key={t.id} toothbrush={t} />
				))}
			</div>
		</div>
	);
};

export default Products;
