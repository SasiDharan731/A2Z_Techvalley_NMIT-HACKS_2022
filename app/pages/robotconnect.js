import React from 'react'
import styles from '../styles/robotconnect.module.css';
import Image from 'next/image'; 

function robotconnect() {
  return (
    <div>
        <div>
            <div className={styles.pu}>
                <div className={styles.topBar}>
                    <div onClick={() => router.push('/dashboard')}>
                        <span className={styles.headingHi}>Hi, A2Z</span> <br />
                        <span className={styles.greeting}>Good Afternoon!</span>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.enter_details}>
            <p className={styles.det_text}>Enter Robot Code</p>
            <input className={styles.inputbox} type="text" />


            <div className={styles.seedsbutton}>
                Connect 
            </div>
        </div>w

    </div>
  )
}

export default robotconnect