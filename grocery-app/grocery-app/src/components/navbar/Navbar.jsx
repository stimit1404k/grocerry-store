import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
	const [cartQuantity] = useState(0);
	return (
		<nav>
			<div className="s1">
				<img src={logo} alt="logo" />
				<div className="searchBar">
					<input
						className="search"
						type="text"
						placeholder="Search for brands, products and categories.."
					/>
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
					</button>
					<div className="right">
						<div className="cart">
							<span className="qty">{cartQuantity} </span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
								/>
							</svg>
						</div>
						{/* user icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="s2">
				<Dropdown>
					<Dropdown.Toggle variant="" id="dropdown-basic">
						Categories
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">
							Fresh Veggies
						</Dropdown.Item>
						<Dropdown.Item href="#/action-2">
							Fresh Fruits
						</Dropdown.Item>
						<Dropdown.Item href="#/action-3">
							House Cleaning
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<a href="">About Us</a>
				<br />
				<a href="">Contact Us</a>
				<Dropdown>
					<Dropdown.Toggle variant="" id="dropdown-basic">
						MORE
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">FAQs</Dropdown.Item>
						<Dropdown.Item href="#/action-2">
							Privacy Policy
						</Dropdown.Item>
						<Dropdown.Item href="#/action-3">
							Terms & Conditions
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};

export default Navbar;
