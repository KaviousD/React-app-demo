import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, Row, Col } from "react-bootstrap";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.setShow = props.setShow;
    }
    

    render() {
        const ImgArr = this.props.imgdata;

        const ImgArr1 = ImgArr.map((data, index) => (
            <Col key={index}>
                <HornedBeast
                    setShow={this.setShow}
                    keyword={data.keyword}
                    imageUrl={data.image_url}
                    description={data.description}
                    title={data.title}
                />
            </Col>
        ));

        return (
            <main className="Animal image">
                <Container>
                    <Row>{ImgArr1}</Row>
                </Container>
            </main>
        );
    }
}

export default Main;
