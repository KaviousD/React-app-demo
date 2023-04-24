import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class HornedBeast extends React.Component {

  render() {
    return (
      <div className="Animalhorns">
        <Card style={{width: '18rem'}}>
         <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.keyword}
          title={this.props.title}
        />
        <p>{this.props.description}</p> 
        </Card>
        
      </div>
    );
  }
}

export default HornedBeast;
