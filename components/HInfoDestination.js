import React from 'react';

class HDestination extends React.Component {

    render() {
      const src = this.props.src;
      const name = this.props.name;
      const duree = this.props.duree;
      const cost = this.props.cost;
      const avantage = this.props.avantage;
      return (
          <div className="bg-white flex flex-col justify-stretch border-solid border-2 border-black rounded-2xl max-w-xs max-h-xs">
            <div className="rounded-t-2xl h-28 flex-7 flex justify-center">
              <img src={src} alt="logo" className="rounded-t-2xl max-h-full max-w-full" />
            </div>
            <div className="text-center text-yellow-500 py-0 border-solid border-2 border-r-0 border-l-0 border-black flex-1">
                <p className="font-bold text-lg m-0 p-0 font-sans">{name}</p>
            </div>
            <div className="text-black text-sm text-left ml-3 flex-3 flex align-center">
              <p>
                Duree    : {duree}<br/>
                Coût     : {cost}<br/>
                Avantage : {avantage}
              </p>
            </div >
          </div>
      );
    }
  }

export default HDestination;

