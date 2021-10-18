import Earth from '../video/EarthFromSpace.mp4'
import styles from '../styles/utils.module.css'

const Background = () => {
  return (
    <video autoPlay loop muted className={styles.backgroundVideo}>
      <source src={Earth} type='video/mp4' />
    </video>
  )
}

export default Background