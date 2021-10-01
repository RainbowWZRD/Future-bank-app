import React from "react"
import {
    PaginationNav,
    PaginationUl,
    PaginationLi
} from "./PaginationElements"

const Pagination = ({cryptoPerPage, totalCrypto}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCrypto /cryptoPerPage); i++ ){
        pageNumbers.push(i)
    }


    return (
        <PaginationNav>
        <PaginationUl className="pagination">
        {pageNumbers.map((number)=>{
            <PaginationLi key={number} className="page-item">
                <a href="!#" className="page-link">
                {number}
                </a>
            </PaginationLi>
        })}
        </PaginationUl>
        </PaginationNav>
    )
}

export default Pagination
