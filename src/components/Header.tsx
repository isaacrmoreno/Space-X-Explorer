import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import styles from '../styles/utils.module.css'

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
          <IonTitle className={styles.center}>SPACE X EXPLORER</IonTitle>
        </IonToolbar>
      </IonHeader>
  );
};

export default Header