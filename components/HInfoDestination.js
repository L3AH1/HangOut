import React from 'react';
import styles from '../styles/Home.module.css'

class HDestination extends React.Component {

    render() {
      const src = this.props.src;
      const name = this.props.name;
      const duree = this.props.duree;
      const cost = this.props.cost;
      const avantage = this.props.avantage;
      return (
          <div className={styles.HDestination}>
            <div className={styles.HDestinationDivpicture}>
              <img src={src} alt="logo" className={styles.HDestinationPicture} />
            </div>
            <div className={styles.HDestinationCityName}>
                <p className={styles.HDestinationTxt}>{name}</p>
            </div>
            <div className={styles.HDestinationCost}>
              <p>
                      Duree : {duree}<br/>
                      Coût  : {cost}<br/>
                      Avantage : {avantage}<br/>
              </p>
            </div >
            
              
          </div>
      );
    }
  }

export default HDestination;

