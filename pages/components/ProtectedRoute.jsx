import React from 'react'
import { useRouter } from 'next/router';
import { UserAuth } from '../context/AuthContext';
const ProtectedRoute = ({children}) => {
    const router = useRouter();
    const {user} =UserAuth();

    if(!user){
        setTimeout(()=>{
            return router.push("/Home")
        },0)
    }else{
        return children
    }
 
}

export default ProtectedRoute