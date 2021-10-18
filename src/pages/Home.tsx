import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Background from '../components/Background';

import { IonContent, IonPage } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>

        <SearchBar />
        <Background />

      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home