import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import PokemonDetails from "./pages/pokemonDetalls";
import PokemonMoves from "./pages/pokemonMoves";

function App() {
	return (
		<div className="font-poppins">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/page/:page" element={<Home />} />
					<Route exact path="/pokemon/:name" element={<PokemonDetails />} />
					<Route exact path="/pokemon/:name/moves" element={<PokemonMoves />} />
					<Route exact path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
