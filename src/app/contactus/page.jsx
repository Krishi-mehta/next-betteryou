"use client";

import React, { useEffect } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useForm } from "react-hook-form";
import "./page.css";

function Contactus() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   website: "",
  //   subject: "",
  //   message: "",
  // });

  // const [errors, setErrors] = useState({});

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: ""
    }
  });

 async function onSubmit(data){
  await new Promise((res) => setTimeout(res,5000))
  
  console.log("Sumitting the form",data);
  reset(); 
 }

useEffect(()=>{
  reset();
},[reset])

  return (
    <div>
      <Header />
      <section className="contact-page-container">
        <div className="contact-page-wrapper">
          <div className="contact-form-container">
            <div className="contact-title">
              <h2>Send Your Message</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}
             className="contact-form">
              <div className="contact-input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  // className={errors.name?'input-error' : ""}
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <p className="contact-error">{errors.name.message}</p>
                )}
              </div>

              <div className="contact-input-box">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  {...register("phone", {
                    required: "Phone no is required",
                    minLength: {
                      value: 10,
                      message: "Number must be 10 digits",
                    },
                    maxLength: {
                      value: 10,
                      message: "Number must be 10 digits",
                    },
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid mobile number format",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="contact-error">{errors.phone.message}</p>
                )}
              </div>

              <div className="contact-input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="contact-error">{errors.email.message}</p>
                )}
              </div>

              {/* <div className="contact-input-box">
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div> */}

              <div className="contact-input-box">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  {
                    ...register("subject",{
                      required:"Subject is required",
                      minLength: {
                        value:3,
                        message:"Min length atleast 10"
                      },
                      maxLength:{
                        value:10,
                        message:"Max length atleast 30"
                      }
                    })
                  }
                />
                {errors.subject && <p className="contact-error">{errors.subject.message}</p>}
              </div>

              <div className="contact-input-box">
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  {
                    ...register("message",{
                      required:"Message is required",
                      minLength: {
                        value:10,
                        message:"Min length atleast 10"
                      },
                      maxLength:{
                        value:30,
                        message:"Max length atleast 60"
                      }
                    })
                  }
                />
                {errors.message && (
                  <p className="contact-error">{errors.message.message}</p>
                )}
              </div>

              <div className="contact-button-box">
                <input type="submit" disabled={isSubmitting} value={isSubmitting?'Submitting...' : 'Submit'}></input>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contactus;
