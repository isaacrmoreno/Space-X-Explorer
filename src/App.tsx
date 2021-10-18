import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Helmet } from "react-helmet";

import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

const App: React.FC = () => (
  <IonApp>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Space X Explorer</title>
      <link rel="canonical" href="https://github.com/isaacrmoreno/Space-X-Explorer" />
      <meta name="description" content='Space X web app that utilizes Apollo-Client, GraphQL, and Ionic Framework to query mission launch history.' />
    </Helmet>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
