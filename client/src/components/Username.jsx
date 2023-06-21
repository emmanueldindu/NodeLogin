import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import {useFormik} from 'formik'

import styles from '../styles/Username.module.css'

function Username() {
  
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center  h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello Again!!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500"> connect with us</span>
            
          </div>
          <form action="" className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />

              </div>

              <div className="textbok flex flex-col items-center gap-6">
                <input type="text" name="" className={styles.textbox}  placeholder='Username' id="" />
                <button className={styles.btn} type='submit'>Lets Go!</button>


            </div>

            <div className="text-center py-1">
              <span className='text-gray-500'>Not a Member? <Link className='text-red-500' to="/register">Register here</Link> </span>


            </div>
          </form>
        </div>
      </div>
</div>
  )
}

export default Username