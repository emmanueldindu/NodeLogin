import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import {resetPasswordValidation  } from '../helper/validate'

import styles from '../styles/Username.module.css'

function Reset() {


  const formik = useFormik({
    initialValues: {
      password: '',
      confirm: ''
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async values => {
      console.log(values)
    }
  })
  
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center  h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset </h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500"> Enter new password</span>
            
          </div>
          <form action="" className="pt-20" onSubmit={formik.handleSubmit}>
           

              <div className="textbok flex flex-col items-center gap-6">
                <input {...formik.getFieldProps('password')} type="text" name="password" className={styles.textbox}  placeholder='password' id="" />
                <input {...formik.getFieldProps('confirm')} type="text" name="password" className={styles.textbox}  placeholder='Repeat Password ' id="" />

              <button className={styles.btn} type='submit'>Reset</button>


            </div>

      
          </form>
        </div>
      </div>
</div>
  )
}

export default Reset