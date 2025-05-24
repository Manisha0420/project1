import { useLocation, useNavigate, useParams } from "react-router"

const ProductDescrip = () => {

  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()
  console.log(location)
          
  return (

    <div className='w-[80%] mx-auto'>
         <h1 className='text-blue-500 text-xl' >{params.name}</h1>
          <h1>PRODUCT FULL DESCRIPTION</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis possimus tenetur dolorem eligendi quisquam veniam odit numquam rerum a optio perferendis aperiam corporis qui eos, delectus doloremque, perspiciatis maiores dolor!</p>

          <button onClick={()=>navigate("/products")} className='bg-red-500 text-white px-4 py-2 '>go back</button>
      
    </div>
  )
}

export default ProductDescrip
