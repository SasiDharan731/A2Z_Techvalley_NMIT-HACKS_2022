import React from 'react'
import Image from 'next/image';
import styles from '../styles/marketplace.module.css';

function marketplace() {
  return (
    <div>
        <div className={styles.pu}>
            <div className={styles.topBar}>
                <div>
                    <span className={styles.headingHi}>Hi, A2Z</span> <br />
                    <span className={styles.greeting}>Good Afternoon!</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default marketplace