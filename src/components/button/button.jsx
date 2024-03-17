import React from 'react';
import "./button.css"

class Button extends React.Component {
  render() {
    const { 
      variant,
      content,
      ...others
    } = this.props;
    const className = variant ? `button ${variant}` : 'button';
    
    return (
      <button className={className} {...others}>
        {content}
      </button>
    )
  }
}

export default Button;
