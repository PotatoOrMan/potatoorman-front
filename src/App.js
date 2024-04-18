import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home"
import Gallery from "./components/gallery"
import Story from "./components/story"

function App() {
  return (
    <div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/gallery" element={<Gallery />}></Route>
					<Route path="/story" element={<Story />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  );
}



export default App;
