import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickImage: 0
    };
  }
  clickImage = () => {
    this.setState ({
      clickImage: this.state.clickImage + 1
    });
  }

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
        {/* adding a vote clicker */}
        <img onClick={this.clickImage} src= {this.props.imageUrl} alt={this.props.keyword} title={this.props.title}></img>
        <p>{this.props.description}</p> 
        <span>🤣😒👌{this.state.clickImage} </span>
        </Card>
        
      </div>
    );
  }
}

export default HornedBeast;
