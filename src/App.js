import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PokemonDetails from "./pages/pokemonDetalls";

function App() {
	return (
		<div className="font-poppins">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pokemon/:name" element={<PokemonDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
