import React from "react";

class HornedBeast extends React.Component {

  render() {
    return (
      <div className="Animalhorns">
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.keyword}
          title={this.props.title}
        />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;