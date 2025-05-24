import React from 'react'
import { useNavigate  } from 'react-router';


    
const ProductDetails = () => {

  const navigate =useNavigate();

  return (
    <div className='w-[80%]  p-4 '>
      <h1>Product full details</h1>
      <h1>Product full details</h1>
      <h1>Product full details</h1>
      <h1>Product full details</h1>
      <h1>Product full details</h1>
      <button onClick={()=>navigate("/products")} className='bg-red-500 text-white rounded px-4 py-2' >Go back</button>
    </div>
  )
}

export default ProductDetails
