import React from "react";
import Card from 'react-bootstrap/Card';
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickImage: 0
    };
    this.setShow = props.setShow
  }
  clickImage = () => {
    this.setState({
      clickImage: this.state.clickImage + 1
    });

    //open the modal
    this.setShow(true)
    
  }

  render() {
    return (
      <div className="Animalhorns">
        <Card style={{ width: '18rem' }}>
          <body>{this.props.title}</body>
          {/* <img */}
            {/* src={this.props.imageUrl}
            alt={this.props.keyword}
            title={this.props.title}
          /> */}
          {/* adding a vote clicker */}
          <img onClick={this.clickImage} src={this.props.imageUrl} alt={this.props.keyword} title={this.props.title}></img>
          <p>{this.props.description}</p>

          <span>🤣😒👌{this.state.clickImage} </span>
        </Card>

      </div>
    );
  }
}

export default HornedBeast;
