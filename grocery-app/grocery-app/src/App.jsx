import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<div>ERROR 404 Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
