// import React from "react";

import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CatalogPage from "./pages/CatalogPage"
import FavoritePage from "./pages/FavoritePage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchAdverts } from "./redux/advertsOperation"
import { selectCurentPage } from "./redux/selectors"
import { incrementPage } from "./redux/advertsSlice"

function App() {
  const dispatch = useDispatch();
  const page = useSelector(selectCurentPage);
  useEffect(() => { 
      if (page === 1) {
          dispatch(fetchAdverts(page));
          dispatch(incrementPage());
       }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
