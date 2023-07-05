import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from '../helper/validate'

import styles from '../styles/Username.module.css'

function Register() {

  const[file, setFile] = useState()


  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async values => {
      console.log(values)
    }
  })

  const onUpload = async e => {
    const base64 = ''
    setFile(base64)

  }
  
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center  h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col bottom-8 relative items-center">
            <h4 className='text-2xl mb-8 relative bottom-5 font-bold'>Register</h4>
            <span className="py-4 text-xl w-2/3 text-center bottom-10 relative text-gray-500"> Join us today</span>
            
          </div>
          <form action="" className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center bottom-24 relative">
              <label htmlFor="profile">


              <img src={avatar} className={styles.profile_img} alt="avatar" />
              </label>
              <input type='file' id='profile' name='profile' />
              
              </div>

              <div className="textbok flex flex-col items-center gap-4 relative bottom-16">
              <input {...formik.getFieldProps('email')} type="text" name="email" className={styles.textbox} placeholder='Email*' id="" />
              <input {...formik.getFieldProps('username')} type="text" name="usename" className={styles.textbox} placeholder='username' id="" />
              <input {...formik.getFieldProps('password')} type="text" name="password" className={styles.textbox}  placeholder='password' id="" />
              
              
                <button className={styles.btn} type='submit'>Sign In</button>


            </div>

            <div className="text-center relative bottom-16">
              <span className='text-gray-500'>Already Registerd?  <Link className='text-red-500' to="/">Login Now</Link> </span>


            </div>
          </form>
        </div>
      </div>
</div>
  )
}

export default Register