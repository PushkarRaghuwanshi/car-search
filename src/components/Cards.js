// import React, { useState } from 'react'
// import Card from './Card'
// import { cars } from '../data'

// const Cards = () => {
//   // const [carsData, setCarsData] = useState(cars);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [limit] = useState(10);

//   const lastIndex = currentPage * limit;
//   const firstIndex = lastIndex - limit;
  
//   const currentPost = cars.slice(firstIndex, lastIndex);

//   return (
//     <div className=' shop w-11/12 max-h-full mx-auto '>
//       <div className=' products w-11/12 h-auto grid grid-cols-[31rem,31rem,30rem]   '>
//         {currentPost.map((car) => {
//           return <Card key={car.id} carsData={car} />
//         })}
//       </div>
//     </div>
//   )
// }

// export default Cards


/* eslint-disable */
import React, { useState } from 'react';
import Card from './Card';
import { carsData } from '../data';

const Cards = () => {
  // const [carsData, setCarsData] = useState(cars[0]);

  

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10); // Display 6 cards per page

  // Calculate total number of pages
  const totalPages = Math.ceil(carsData.length / postPerPage);

  // Define the paginate function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = carsData.slice(firstPostIndex, lastPostIndex);

  const buttonStyle = {
    display: 'inline-block',
    padding: '2px 10px',
    margin: '5px',
    border: '2px solid white',
    borderRadius: '4px',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div className='shop w-11/12 max-h-full mx-auto'>
      <div className='products w-11/12 h-auto grid grid-cols-[31rem,31rem,30rem]'>
        {currentPost.map((car) => (
          <Card key={car.id} data={car} />
        ))}
      </div>
      <div className='pagination'>
        <span className='page-number'>
          <button
            style={buttonStyle}
            onClick={() => paginate(currentPage - 1)}
            className='pagination-button'
            disabled={currentPage === 1}
          >
            &lt; Prev
          </button>
        </span>
        {pageNumbers.map((number) => (
          <span key={number} className='page-number'>
            <button
              style={buttonStyle}
              onClick={() => paginate(number)}
              className={`pagination-button ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </button>
          </span>
        ))}
        <span className='page-number'>
          <button
            style={buttonStyle}
            onClick={() => paginate(currentPage + 1)}
            className='pagination-button'
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </button>
        </span>
      </div>
    </div>
  );
};

export default Cards;




