import React, {useState, useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import CoinGecko from 'coingecko-api';
import Hero from "./components/Hero"
import Cryptos from  "./components/Cryptos"
// import Pagination from "./Hooks/Pagination"
import {BrowserRouter as Router} from "react-router-dom"
import Home from "./components/Home";

function App() {
  const [crypto, setCrypto] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cryptoPerPage, setCryptoPerPage] = useState(8)
 

    const CoinGecko = require('coingecko-api');
    const CoinGeckoClient = new CoinGecko();

    const fetchData = async () => {
        let data = await CoinGeckoClient.coins.markets();
        let myData = data.data
        setCrypto(myData)
    }

    useEffect(() => {
        setLoading(true)
        fetchData()
        console.log(crypto);
        setLoading(false)
    }, [])

    const indexOfLastCrypto = currentPage * cryptoPerPage
    const indexOfFirstCrypto = indexOfLastCrypto - cryptoPerPage
    const currentCrypto =  crypto.slice( indexOfFirstCrypto - indexOfLastCrypto   )

  return (
    <Router>
    <Sidebar />
    <Navbar />
    <Hero />
    <Cryptos crypto={currentCrypto} loading={loading} />
    <Home />
    </Router>
  );
}

export default App;
