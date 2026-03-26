import Root from "./Root";
import Start from "./pages/Start";
import Products from "./pages/Products";
// import Details from "./pages/Details"
import { tandborstar } from "./data/products";
import { Component } from "react";


export const routes = [
	{
		path: "/",
		Component: Root,
		children: [
			{ path: "/", Component: Start },
			{
				path: "/products",
				loader: async () => {
					return tandborstar;
				},

				Component: Products,
			},
			//  { path: "/products/:id", Component: Details },
		],
	},
];
