import { Link ,NavLink} from 'react-router'

const Nav = () => {
  return (
    <div className='w-screen h-auto flex p-5 justify-center gap-10 font-semibold text-[18px]'>
      <NavLink 
           to="/" 
           className={(e)=>(e.isActive? "text-blue-500":"")} >Home
      </NavLink>

      <NavLink 
          to="/services" 
          className={(e)=>(e.isActive ? "text-blue-500": "")}>Services
      </NavLink>
      <NavLink 
          to="/products" 
          className={(e)=>(e.isActive?"text-blue-500":"")} >Product
      </NavLink>
      <NavLink 
           to="/about" 
           className={(e)=>(e.isActive ? "text-blue-500":"")} >About
      </NavLink>
    </div>
  )
}

export default Nav
