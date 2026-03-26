import { Outlet, NavLink } from "react-router";
import "./Root.css";

function Root() {
	return (
		<div className="app">
			<header>
				<h1> Tandborstar </h1>
				<nav className="row nav-links">
					<NavLink to="/"> Start </NavLink>
					<NavLink to="/about"> Om oss </NavLink>
					<NavLink to="/products"> Produkter </NavLink>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default Root;
