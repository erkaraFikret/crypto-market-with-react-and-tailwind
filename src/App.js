import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import axios from 'axios'
import { useEffect, useState } from "react";
import CoinPage from "./pages/CoinPage";
import Footer from "./components/Footer";



function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(coins);
    })
  }, [url])
  return (
    <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />

    </ThemeProvider>
  );
}

export default App;
