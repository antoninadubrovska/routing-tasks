import { useLoaderData } from "react-router";
import ProductItem from "../components/ProductItem";



const Products = () => {

	const toothbrushes = useLoaderData()
	console.log("toothbrushes: ", toothbrushes)

	return (
		<div className="products">
			<h2> Vårt sortiment: </h2>
			<div className="product-list">
				{toothbrushes.map((t) => (
					<ProductItem key={t.id} toothbrush={t} />
				))}
			</div>
		</div>
	);
};

export default Products
