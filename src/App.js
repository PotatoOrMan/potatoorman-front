import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home"
import Gallery from "./components/gallery"
import Story from "./components/story"
import Choice from "./components/choice"
import Round1 from "./components/round1"

function App() {
  return (
    <div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/gallery" element={<Gallery />}></Route>
					<Route path="/story" element={<Story />}></Route>
					<Route path="/choice" element={<Choice />}></Route>
					<Route path="/round1" element={<Round1 />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  );
}



export default App;
