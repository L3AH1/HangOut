import React from 'react';
import '../styles/Home.module.css';

class Hbutton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // variant = primary | secondary
    // children
    const classes = [
      'button',
      this.props.primary && "button_primary",
      this.props.primary && "text_primary",
      this.props.secondary && "button_secondary",
      this.props.secondary && "text_secondary",
    ].join(' ')

    // 'button button_primary'

    return (
      <div classeName="boutton"> 
        <button className={classes} onClick={this.props.onClick}>
        { this.props.children}
        </button>
        </div>
      );
    }
  }

export default Hbutton;

