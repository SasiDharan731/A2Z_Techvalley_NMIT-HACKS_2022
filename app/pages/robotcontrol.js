import React from 'react'
import styles from '../styles/robotcontrol.module.css';
import Image from 'next/image';
import battery from '../Assets/battery.png'
import location from '../Assets/location.png'
import planting from '../Assets/planting.png'
import harvesting from '../Assets/harvesting.png'
import maintenance from '../Assets/maintenance.png'
import axios from 'axios';
function robotcontrol() {
    const 
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

        <div className={styles.controls}>
            <div className={styles.camerafeed}>

            </div>

            <div className={styles.seedsbutton}>
                Plant Seeds 
            </div>

            <div className={styles.seedsbutton}>
                Stop
            </div>
        </div>

        <div className={styles.containerCard}>
            <div className={styles.carsConatiner}>
                <div className={styles.card}>
                    <Image
                        src={battery}
                        alt="Picture of the author"
                        width={45}
                        height={45}
                        onClick={() => router.push('/industries')}
                    />
                    <div className={styles.helperText}>
                        <span className={styles.helperHead}>
                            Battery
                        </span>
                        <br />
                        <span className={styles.helperDown}>100%</span>                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={location}
                                alt="Picture of the author"
                                width={45}
                                height={45}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Robot Location
                                </span>{' '}
                            </div>
                        </div>
                    </div>
                </div>

        <div className={styles.robotworks}>
            <div className={styles.robotworks_head}>Tomato</div>

            <div className={styles.detailsdiv}>
                <div className={styles.details}>
                    <Image
                        src={planting}
                        alt="Picture of the author"
                        width={80}
                        height={80}
                    />
                    <p className={styles.detailstext}>Planting</p>
                </div>

                <div className={styles.details}>
                    <Image
                        src={harvesting}
                        alt="Picture of the author"
                        width={80}
                        height={80}
                    />
                    <p className={styles.detailstext}>Harvesting</p>
                </div>

                <div className={styles.details}>
                    <Image
                        src={maintenance}
                        alt="Picture of the author"
                        width={80}
                        height={80}
                    />
                    <p className={styles.detailstext}>Maintenance</p>
                </div>
            </div>
        </div>        
    </div>
  );
}

export default robotcontrol;