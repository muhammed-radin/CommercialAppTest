import React, { useEffect } from 'react'
import "./AuthPage.css"
import { useState } from 'react'
import { Outlet, useLocation, useNavigate} from 'react-router-dom'
import Register from './Register'
import Login from './Login'

export default function AuthPage() {
  const [isRegister,setisRegister] = useState(true)
    const navigate = useNavigate();
    const location =useLocation()

    useEffect(()=>{
      if (location.pathname =='/auth'){
        navigate("/login")
      }

    },[location,navigate])

  const toggleBtn =()=>{
    setisRegister(!isRegister)
     navigate(isRegister ? "/auth/register" : "/auth/login");
  }
 
  return (
    <div className='container'>
        <div className='left_section'>
            <h1>Luxora</h1>
            <div className='p'>
            <p className='p1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor fugit delectus eius, perferendis sint sit soluta, nesciunt perspiciatis
               rem voluptatum itaque ipsum accusantium commodi? Voluptas facere dignissimos ad eveniet.</p>
               <p className='p2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit, cum nihil accusantium facilis dolorum, voluptatem fugit laborum itaque beatae
                 perspiciatis nulla tenetur rem deserunt. Perspiciatis natus ipsum atque earum.
               </p>

         </div>
                <button className="toggleBtn" type="button" onClick={toggleBtn}>
      {isRegister ? "Register" : "Login"}
    </button>
        </div>
        <div className='right_section'>
               <Outlet/>
        </div>
    </div>
  )
}
