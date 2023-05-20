import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, Row, Col } from "react-bootstrap";



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.setShow = props.setShow;
        this.setShowbeast = props.setShowbeast;
        this.state = {
            data: [], // should create an empty array to store the fetched data
        };
    }

    // Pulling number of horns and other props.
    componentDidMount() {
        // Fetch the JSON data
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                // Update the state with the fetched data
                this.setState({ data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const ImgArr = this.props.imgdata;

        const ImgArr1 = ImgArr.map((data, index) => (
            <Col key={index}>
                <HornedBeast
                    setShowbeast={this.setShowbeast}
                    setShow={this.setShow}
                    keyword={data.keyword}
                    imageUrl={data.image_url}
                    description={data.description}
                    title={data.title}
                    horns={data.horns}
                />
            </Col>))



        // const { data } = this.state, // Destructure the data from the state


        return (
            <main className="Animal image">
                <Container>
                    <Row>{ImgArr1}</Row>
                </Container>
            </main>
        )
    }
}

export default Main;

