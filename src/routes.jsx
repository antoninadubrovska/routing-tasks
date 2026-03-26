import Root from "./Root";
import Start from "./pages/Start";
import Products from "./pages/Products";
// import Details from "./pages/Details"

export const routes = [
	{
		path: "/",
		Component: Root,
		children: [
			{ path: "/", Component: Start },
			{ path: "/products", Component: Products },
			//   { path: "/products/:id", Component: Details },
		],
	},
];
