import React from 'react';
import '../styles/HDestination.css'

class HDestination extends React.Component {

    render() {
      const src = this.props.src;
      const name = this.props.name;
      const duree = this.props.duree;
      const cost = this.props.cost;
      const avantage = this.props.avantage;
      return (
          <div className="HDestination">
            <div className="HDestination-Divpicture">
              <img src={src} alt="logo" className="HDestination-picture" />
            </div>
            <div className="HDestination-cityName">
                <p className="HDestination-txt">{name}</p>
            </div>
            <div className="HDestination-cost">
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

