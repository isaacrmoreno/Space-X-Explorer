import gitHubLogo from '../assets/github.png'
import { IonFooter, IonToolbar } from '@ionic/react'
import styles from '../styles/utils.module.css'

const Footer: React.FC = () => {
  return (
    <>
      <IonFooter>
        <IonToolbar>
          <div className={styles.center}>
            <a href='https://github.com/isaacrmoreno/SpaceX'>
              <img
                src={gitHubLogo}
                width='40'
                height='40'
                alt='GitHub Logo'/>
            </a>
          </div>
        </IonToolbar>
      </IonFooter>
    </> 
  )
}

export default Footer