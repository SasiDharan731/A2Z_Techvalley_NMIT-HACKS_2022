import React from 'react'
import styles from '../styles/robotcontrol.module.css';
import Image from 'next/image';

function robotcontrol() {
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
    </div>
  );
}

export default robotcontrol;