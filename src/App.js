import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import PokemonDetails from "./pages/pokemonDetalls";
import PokemonMoves from "./pages/pokemonMoves";
import PokemonSearch from "./pages/pokemonSearch";

function App() {
	return (
		<div className="font-poppins">
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/page/:page" element={<Home />} />
					<Route exact path="/pokemon/" element={<Home />} />
					<Route exact path="/pokemon/:name" element={<PokemonDetails />} />
					<Route exact path="/pokemon/:name/moves" element={<PokemonMoves />} />
					<Route exact path="/search/:query" element={<PokemonSearch />} />
					<Route exact path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
