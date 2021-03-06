import React from 'react'
import  './Git.css'

const Pagination = ({dataPerpage, totalData, changePage}) => {
    const pageNumber = [];

    for (let index = 1; index <= Math.ceil(totalData/dataPerpage); index++) {
        pageNumber.push(index);
    }
  return (
    <div className='paginate' >
        {
            pageNumber.map(number => {
                return <p key={number} onClick={()=> {changePage(number)}} >{number}</p>
            })
        }
        
    </div>
  )
}

export default Pagination