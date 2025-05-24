import { Routes,Route } from 'react-router'
import Home from '../Components/Home'
import ProductDetails from '../Components/ProductDetails'
import Products from '../Components/Products'
import About from '../Components/About'
import Services from '../Components/Services'
import ProductDescrip from '../Components/ProductDescrip'

const MainRoute = () => {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}></Route>

            <Route path='/products' element={<Products/>}></Route>
            <Route path='details' element={<ProductDetails/>}/>
            <Route path='description/:name' element={<ProductDescrip/>}/>

            <Route path='/services' element={<Services/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
    </div>
  )
}

export default MainRoute
