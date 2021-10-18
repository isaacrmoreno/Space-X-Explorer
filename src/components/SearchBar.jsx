import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { IonSearchbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { GET_LAUNCH_DETAILS } from '../services/apollo';
import styles from '../styles/utils.module.css'
import spinner from '../assets/spinner.gif'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')

  const { loading, error, data } = useQuery(GET_LAUNCH_DETAILS)

  if (loading) return <p className={styles.centerXY}>
    <img
      src={spinner}
      width='150'
      height='150'
      alt='loading...' />
  </p>

  if (error) return <p className={styles.centerXY}>{error.message}</p>

  const getFilteredSearch = (data, searchText) => {
    return data.launches.slice(0, 15).filter((launches) => 
      // launches.links.flickr_images.length > 0 &&
      launches.mission_name.toLowerCase().includes(searchText.toLowerCase())) //StartsWith() versus includes gives way less results.
  }

  const filteredSearch = getFilteredSearch(data, searchText);

    return (
      <> 
          <IonSearchbar 
          className={styles.searchBar}
          value={searchText} 
          onIonChange={e => setSearchText(e.target.value)} />

        {searchText.length >= 1 ? (

          <div className={styles.dataResult}>
            {filteredSearch.map(({ key, id, launch_year, mission_name, details, launches, article_Link, links, flickr_images }) => (
            <>
                <IonCard key={key} id={id}>
                <IonCardHeader>
                  <IonCardSubtitle>Launch Year: {launch_year}</IonCardSubtitle>
                  <IonCardTitle>Mission: {mission_name}</IonCardTitle>
                </IonCardHeader>
              <IonCardContent>{details}</IonCardContent>
                  {/* <IonCardContent><a href={article_Link}>Learn More Here</a></IonCardContent> */}
                  {/* <IonCardContent><img src={launches.links.flickr_images} alt='Space X Images'></img></IonCardContent> */}
              </IonCard>
            </>
            ))
          }
        </div>
        )
        : ''
        } 
      </>
    )
  }

export default SearchBar
