import React from 'react'
import Image from 'next/image';
import styles from '../styles/dashboard.module.css';
import NextButton from '../Assets/next.png'

function dashboard() {
  return (
    <div>

        <p className={styles.head}><b> Hi, A2Z</b></p>
        <p className={styles.subhead}>Good Evening</p>

        <div className={styles.tip}>
                <div className={styles.textConatiner}>
                    <h3 className={styles.heading}>Tip of the day</h3>
                    <p className={styles.tipText}>
                        5 ways to keep your plants healthy
                    </p>
                </div>
                <div className={styles.button}>
                    <Image
                        src={NextButton}
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                </div>
        </div>

    </div>
  )
}

export default dashboard