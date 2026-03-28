import { useParams, useLoaderData, useNavigate, Link } from "react-router";
import "./details.css";
import ProductItem from "../components/ProductItem";
//import { match } from


const Details = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const toothbrushes = useLoaderData();

	const item = toothbrushes.find((t) => t.id === Number(id));
	if (!item) {
		console.log("Hittade inte produkten.. ", id, toothbrushes);
		// console.log('id har datatypen: ', typeof id)

		return <div className="details"> Kunde inte visa produkten. </div>;
	}

	const goBack = (event) => {
		event.preventDefault();
		//window.history.back();
		navigate(-1);
	};

	return (
		<div className="details">
			<h3> {item.name} </h3>
			<p> {item.price} kr </p>
			<p> Mer information om produkten... </p>

			<p>
				{" "}
				<a className="backToProducts" href="/products" onClick={goBack}>
					{" "}
					Tillbaka till produkterna{" "}
				</a>{" "}
			</p>
		</div>
	);
};

export default Details;
