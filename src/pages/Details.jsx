import { useParams, useLoaderData, Link } from "react-router";
import "./details.css";

const Details = () => {
	const { id } = useParams();
	const toothbrushes = useLoaderData();

	const item = toothbrushes.find((t) => t.id === Number(id));
	if (!item) {
		console.log("Hittade inte produkten.. ", id, toothbrushes);
		// console.log('id har datatypen: ', typeof id)

		return <div className="details"> Kunde inte visa produkten. </div>;
	}






	return (
		<div className="details">
			<h3> {item.name} </h3>
			<p> {item.price} kr </p>
			<p> Mer information om produkten... </p>
			{/* <p> TODO: link back to products view </p> */}
			{/* (-1) */}
		</div>
	);
};

export default Details;
