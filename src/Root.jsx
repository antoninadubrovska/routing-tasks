import { Outlet, Link } from "react-router";
import "./Root.css";

function Root() {
	return (
		<div className="app">
			<header>
				<h1> Tandborstar </h1>
				<div className="row nav-links">
					<Link to="/"> Start </Link>
					<Link to="/products"> Produkter </Link>
				</div>
			</header>
			
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default Root;
