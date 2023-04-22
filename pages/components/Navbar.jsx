import React from 'react';
import Link from 'next/link';
import Login from '../Login';
import { useRouter } from 'next/router';
import { UserAuth } from '../context/AuthContext';
// import ProtectedRoute from './ProtectedRoute';

const Navbar = () => {
  const {user,logOut}= UserAuth()
const router = useRouter()
 const handleLogout = async()=>{
  try{
    await logOut()
    router.push('/Home')
  }catch(error){
    console.log(error);
  }
 }
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
    <Link href="/Home">
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
    </Link>
    {user?.email ? <div>
          <Link href="/Account"> 
          <button component="a" className='text-white pr-4'>Account</button>
          </Link>
   
         <Link href="/Home">
           <button onClick={handleLogout} component="a" className='bg-red-600 px-6 py-4 rounded cursor-pointer text-white'>LogOut</button>
         
         </Link>
       </div> : <div>
       <Link href="/Login"> 
       <button component="a" className='text-white pr-4'>Sign In</button>
       </Link>

      <Link href="/Signup">
        <button component="a" className='bg-red-600 px-6 py-4 rounded cursor-pointer text-white'>Sign up</button>
      
      </Link>
    </div> 
       
       }
   

    </div>
  )
}

export default Navbar