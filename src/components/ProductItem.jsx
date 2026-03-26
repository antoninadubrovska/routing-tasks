import { Link } from "react-router"

const ProductItem = ({ toothbrush }) => (
	<div className="product-item" >
		<p>{toothbrush.name}</p>
		<p>{toothbrush.price} kr</p>
		<Link to={'/products/' + toothbrush.id}> Läs mer... </Link>


	</div>
)

export default ProductItem