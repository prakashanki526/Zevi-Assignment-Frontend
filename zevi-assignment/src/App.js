import Home from "./pages/home/Home";
import SearchResultPage from "./pages/searchResults/SearchResultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<SearchResultPage />}></Route>
          <Route path='/products/:searchItem' element={<SearchResultPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
