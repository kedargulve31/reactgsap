import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function Main() {
  const { register, handleSubmit,
      formState:{errors},
      reset
   } = useForm();


  const formSubmit = (e) => {
    toast.success("Form Submitted Sucessfully");
    console.log(e);
    reset()
  };



  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="header">React Hook Form & Validation</div>
      <form action="" onSubmit={handleSubmit(formSubmit)}>
        <h4>Ticket Booking</h4>
        <div className="input-filed">
          <label htmlFor="">Full Name</label>
          <input type="text" {...register("fullname",{
            required:'Fullname is required'
          })} />
          {errors.fullname && <p>{errors.fullname.message}</p>}
        </div>

        <div className="input-filed">
          <label htmlFor="">Age</label>
          <input type="text" {...register("age",{
            required:'Age is mandatory',
           min:{
            value:5,
            message:'Age must above 5 years'
           }
          })} />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div className="input-filed">
          <label htmlFor="">Mobile No</label>
          <input type="text" {...register("mobile",{
            required:'Mobile Number is Compuslory',
          })} />
         {errors.mobile && <p>{errors.mobile.message}</p>}
        </div>

        <div className="input-filed">
          <label htmlFor="">From</label>
          <input type="text" {...register("from",{
            required:'From Location is Mandotory'
          })} />
         {errors.from && <p>{errors.from.message}</p>}
        </div>

        <div className="input-filed">
          <label htmlFor="">To</label>
          <input type="text" {...register("to",{
            required:'To Location is required'
          })} />
         {errors.to && <p>{errors.to.message}</p>}
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Main;
