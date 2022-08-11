
import './App.css';
import Home from "./component/pages/Home"
import Search from "./component/pages/Search"
import SearchPage from "./component/pages/SearchPage"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/searchPage" element={<SearchPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
