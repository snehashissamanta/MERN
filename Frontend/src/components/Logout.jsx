import React from 'react'
import { useAuth } from '../context/AuthProvider'

function Logout() {
    const[authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
             alert("Logout successfully");
                        
         
        setTimeout(()=>{ window.location.reload()},2000);
        }catch(error){
            alert("Error:"+error);
            setTimeout(()=>{},3000);
        }
    };
  return (
    <div>
        <button className='px-2 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
           Logout 
        </button>
    </div>
  );
}

export default Logout;