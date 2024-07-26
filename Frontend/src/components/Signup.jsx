import React from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"
import axios from "axios";

function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/";
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>{
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    };
    await axios.post("http://localhost:3000/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        alert("signup successfull");
        navigate(from,{replace:true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    })
    .catch((error)=>{
     if(error.response){
       console.log(error);
      alert("Error:"+error.response.data.message);
     }
    });
  };
  return (
    <>
        <div className="items-center justify-center px-40 py-40">
    <div className="w-[600px]" >
  <div className='modal-box'>
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_modal_3").close()}>✕
      </Link>
   
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type='text' placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none'
         {...register("fullname", { required: true })}/>
          <br></br>
        {errors.fullname && (<span className='text-sm text-red-500'>This field is required</span>)}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })}/>
         <br></br>
        {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type='text' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("password", { required: true })}/>
         <br></br>
        {errors.password && (<span className='text-sm text-red-500'>This field is required</span>)}
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-600 rounded-md px-1 py-1 hover:bg-pink-700'>Signup</button>
        <p>
            Already have an account{" "}
            <button  className='underline text-blue-600 cursor-pointer'
           onClick={()=>
            document.getElementById("my_modal_3").showModal()} >
                Login
            </button>{" "}
            <Login/>
        </p>
    </div> 
    </form> 
  </div>
   </div>
    </div>

    </>
  );
}
export default Signup;