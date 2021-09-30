import React, {useState, useEffect} from 'react'
import CoinGecko from 'coingecko-api';

const Cryptos = () => {
const [crypto, setCrypto] = useState([])

    const CoinGecko = require('coingecko-api');
    const CoinGeckoClient = new CoinGecko();

    const fetchData = async () => {
        let data = await CoinGeckoClient.coins.markets();
        let myData = data.data
        setCrypto(myData)
    }

    useEffect(() => {
        fetchData()
        console.log(crypto);
    }, "")

    return <>
    <ul>
        {crypto.map((token) => {
            const {id, symbol, name, image, market_cap } = token
            return (
                <li key={id}>
                    <p>{symbol}</p>
                    <h1>{name}</h1>
                    <img src={image} />
                    <p>{market_cap.toFixed(2)}</p>
                </li>
            )
        })}
    </ul>
    </>
}

export default Cryptos
