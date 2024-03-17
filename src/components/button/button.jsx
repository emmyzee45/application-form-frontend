import React from 'react';

class Button extends React.Component {
  render() {
    const { 
      variant,
      content,
      ...others
    } = this.props;
    
    // Define default class name if variant is not provided
    const className = variant ? `button ${variant}` : 'button';
    
    return (
      <button className={className} {...others}>
        {content}
      </button>
    )
  }
}

export default Button;
