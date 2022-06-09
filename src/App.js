import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layouts/header/Header";
import Home from "./pages/home/Home";
import ItemDetails from "./pages/itemDetails/ItemDetails";
import AllGenreItems from "./pages/allGenreItems/AllGenreItems";
import Wishlist from "./pages/wishlist/Wishlist";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/all-items/genre=:genre" element={<AllGenreItems />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
