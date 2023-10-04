import React from 'react'
import { BsPeople } from 'react-icons/bs'
import {BiSolidColorFill} from 'react-icons/bi'
import {ImMeter} from 'react-icons/im'
import {PiSteeringWheel} from 'react-icons/pi'

const Card = (props) => {

  const {id, Make, Plate, Model_Year, Classifications, Year,
    Color, Price, img, average} = props.data;

  return (
    <div className='w-[400px] bg-[#dddee3] bg-opacity-80 border rounded-xl  mb-7 p-3 shadow-xl'>
      <img className=' w-[380px] h-[200px] mx-auto rounded-lg' src={img} ></img>

      <div className=' p-4 flex justify-between'>
        <p className='text-black text-2xl font-bold  leading-7'>{Make}</p>
        <p className='text-black text-2xl font-bold  leading-7'> {Year} </p>
      </div>

      <div className=' grid grid-cols-[2fr,1fr] w-[300px] mx-4 gap-5'>
        <p className=' text-blue-950 font-semibold flex'> <BiSolidColorFill className=' mt-1 text-lg mr-2'/> {Color}</p>
        <p className=' text-blue-950 font-semibold flex '> <BsPeople className=' mt-1 text-lg mr-2'/>  4 People </p>



        <p className=' text-blue-950 font-semibold flex'> <ImMeter className=' mt-1 text-lg mr-2'/> {average}</p>
        <p className=' text-blue-950 font-semibold flex'> <PiSteeringWheel className=' mt-1 text-xl mr-2'/> {Classifications} </p>
      </div>

      <div className=' mt-10 w-[400px] flex gap-[100px] mx-4 '>
        <p className=' text-black font-semibold text-2xl'> ₹ {Price} <span className=' text-xs'>/ month</span></p>

        <button className=' bg-[#4a93f8] text-white px-4 py-2 rounded-xl font-semibold '>Rent Now</button>
      </div>
    </div>
  )
}

export default Card




/* eslint-disable */
// import React from 'react';

// const Card = () => {
//   // Define constant values
//   const id = 1;
//   const Make = 'Toyota';
//   const Model_Year = '2023';
//   const Plate = 'ABC123';
//   const Classifications = 'SUV';
//   const Year = '2023';
//   const Color = 'Blue';
//   const Price = '$500';
//   const img = 'car-image-url.jpg';
//   const average = '25 mpg';

//   return (
//     <div className='w-[400px] bg-blue-950 bg-opacity-80 rounded-md mb-7 p-3'>
//       <img className='w-[300px] h-[200px]' src={img} alt={`Car ${id}`} />

//       <div className='p-4 flex justify-between'>
//         <p className='text-white font-semibold text-lg leading-6'>{Make}</p>
//         <p className='text-white font-semibold text-lg leading-6'>{Year}</p>
//       </div>

//       <div className='grid grid-cols-[1fr,1fr] w-[200px] mx-4 gap-5'>
//         <p className='text-white'>{Color}</p>
//         <p className=''>4 People</p>

//         <p className='text-white'>{average}</p>
//         <p className='text-white'>{Classifications}</p>
//       </div>

//       <div className='mt-5 w-[300px] flex gap-12 mx-4'>
//         <p className='text-white'>Price - {Price} <span>/month</span></p>

//         <button className='bg-red-700 text-white'>Rent Now</button>
//       </div>
//     </div>
//   );
// };

// export default Card;
