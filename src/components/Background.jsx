import Earth from '../video/EarthFromSpace.mp4'

import styles from '../styles/utils.module.css'
// import Earth from '../assets/nasa.jpg'

const Background = () => {
  return (
    <video autoPlay loop muted className={styles.backgroundVideo}>
      <source src={Earth} type='video/mp4' />
    </video>
    // <img src={Earth} alt='Satellite orbiting Earth' className={styles.backgroundVideo}/>
  )
}

export default Background