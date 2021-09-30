import React, {useState, useEffect} from 'react'
import CoinGecko from 'coingecko-api';
import {CryptoHero,
    CryptoWrapper,
    CryptoLi,
    CryptoP,
    CryptoH1,
    CryptoImg,
    CryptoCap
} from "./CryptosElements"

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
    }, [])

    return <>
     <CryptoHero>
                    
    <CryptoWrapper>
        {crypto.map((token) => {
            const {id, symbol, name, image, market_cap } = token
            return (
                <CryptoLi key={id}>
                <CryptoImg src={image} />
                 <CryptoP>{symbol.toUpperCase()}</CryptoP>
                 <CryptoH1>{name}</CryptoH1>
                 <CryptoCap>{Math.round((market_cap) / 100000000)} M</CryptoCap>
                </CryptoLi>
            )
        })}
    </CryptoWrapper>
                    </CryptoHero>
    </>
}

export default Cryptos
