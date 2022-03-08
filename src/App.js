import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComponentsHold from "./Components/ComponentsHold";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<ComponentsHold />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
