import React from 'react'
import {CryptoHero,
    CryptoWrapper,
    CryptoLi,
    CryptoP,
    CryptoH1,
    CryptoImg,
    CryptoCap,
    CryptoHeading
} from "./CryptosElements"
import Pagination from "./../../Hooks/Pagination"

const Cryptos = ({crypto, loading, cryptoPerPage, totalCrypto}) => {

    if(loading) {
        return <h2>Loading...</h2>
    }

    return <>
     <CryptoHero>  
     <CryptoHeading>Top Markets</CryptoHeading>      
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
        <Pagination cryptoPerPage={cryptoPerPage} totalCrypto={crypto.length} />
    </CryptoWrapper>
                    </CryptoHero>
    </>
}

export default Cryptos
