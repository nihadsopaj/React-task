import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Mission } from "./pages/Mission/Mission";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mission/:id" element={<Mission />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
