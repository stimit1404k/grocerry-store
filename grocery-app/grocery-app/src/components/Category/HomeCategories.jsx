import "./HomeCategories.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";

const HomeCategories = () => {
	const categories = [
		{
			id: 1,
			image: img1,
			title: "Veggies at your doorstep",
			description: "Shop your veggies here",
		},
		{
			id: 2,
			image: img2,
			title: "Fresh Fruits",
			description: "Get fresh fruits delivered",
		},
		{
			id: 3,
			image: img3,
			title: "Dairy Products",
			description: "Fresh dairy products available",
		},
		{
			id: 4,
			image: img4,
			title: "Organic Products",
			description: "Shop organic and healthy products",
		},
	];

	return (
		<div className="homeCategories">
			{categories.map((category) => (
				<div className="container" key={category.id}>
					<img src={category.image} alt={category.title} />
					<h1>{category.title}</h1>
					<p>{category.description}</p>
				</div>
			))}
		</div>
	);
};

export default HomeCategories;
