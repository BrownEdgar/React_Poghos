import React, { useState } from 'react'
import './App.scss'
import Users from './Users'
import ReactPaginate from 'react-paginate';

const Items = new Array(50).fill().map((_, index) => index + 1)

export default function App() {

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);


  const x = (page * perPage)
  const currentSlice = Items.slice(x - perPage, x)
  console.log(currentSlice)
  const handlePageClick = (e) => {
    setPage(e.selected + 1)
  }

  const pageCount = Math.ceil(Items.length / perPage);

  return (
    <div className='App'>
      <h1>"pagination" with React Paginate</h1>
      <Users users={currentSlice} />
      <ReactPaginate
        breakLabel={<i class='bx bx-dots-horizontal'></i>}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel={<button>
          <i class='bx bx-chevron-left' ></i>
          previous
        </button>}
        renderOnZeroPageCount={null}
        className='App__navigation'
      />
    </div>
  )
}
//https://www.npmjs.com/package/react-paginate 