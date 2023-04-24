import React from 'react'
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Main extends React.Component {
    render() {
        return (
            <main className="Animal image">
                <Container>
                    <Row>
                    <Col>
                <HornedBeast keyword="triceratops" description="Horny dinosaur" title="A picture of a dinosuar" imageUrl="https://th.bing.com/th/id/OIP.0C2mH8bmiv2wT5tYS9mxTAHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[0].keyword} imageUrl={this.props.imgdata[0].image_url} description={this.props.imgdata[0].description} title={this.props.imgdata[0].title}/>
              </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[1].keyword} imageUrl={this.props.imgdata[1].image_url} description={this.props.imgdata[1].description} title={this.props.imgdata[1].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[2].keyword} imageUrl={this.props.imgdata[2].image_url} description={this.props.imgdata[2].description} title={this.props.imgdata[2].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[3].keyword} imageUrl={this.props.imgdata[3].image_url} description={this.props.imgdata[3].description} title={this.props.imgdata[3].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[4].keyword} imageUrl={this.props.imgdata[4].image_url} description={this.props.imgdata[4].description} title={this.props.imgdata[4].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[5].keyword} imageUrl={this.props.imgdata[5].image_url} description={this.props.imgdata[5].description} title={this.props.imgdata[5].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[6].keyword} imageUrl={this.props.imgdata[6].image_url} description={this.props.imgdata[6].description} title={this.props.imgdata[6].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[7].keyword} imageUrl={this.props.imgdata[7].image_url} description={this.props.imgdata[7].description} title={this.props.imgdata[7].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[8].keyword} imageUrl={this.props.imgdata[8].image_url} description={this.props.imgdata[8].description} title={this.props.imgdata[8].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[9].keyword} imageUrl={this.props.imgdata[9].image_url} description={this.props.imgdata[9].description} title={this.props.imgdata[9].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[10].keyword} imageUrl={this.props.imgdata[10].image_url} description={this.props.imgdata[10].descrption} title={this.props.imgdata[10].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[11].keyword} imageUrl={this.props.imgdata[11].image_url} description={this.props.imgdata[11].description} title={this.props.imgdata[11].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[12].keyword} imageUrl={this.props.imgdata[12].image_url} description={this.props.imgdata[12].description} title={this.props.imgdata[12].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[13].keyword} imageUrl={this.props.imgdata[13].image_url} description={this.props.imgdata[13].description} title={this.props.imgdata[13].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[14].keyword} imageUrl={this.props.imgdata[14].image_url} description={this.props.imgdata[14].description} title={this.props.imgdata[14].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[15].keyword} imageUrl={this.props.imgdata[15].image_url} description={this.props.imgdata[15].description} title={this.props.imgdata[15].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[16].keyword} imageUrl={this.props.imgdata[16].image_url} description={this.props.imgdata[16].description} title={this.props.imgdata[16].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[17].keyword} imageUrl={this.props.imgdata[17].image_url} description={this.props.imgdata[17].description} title={this.props.imgdata[17].title}/>
               </Col>
               <Col>
               <HornedBeast keyword={this.props.imgdata[18].keyword} imageUrl={this.props.imgdata[18].image_url} description={this.props.imgdata[18].description} title={this.props.imgdata[18].title}/>
                </Col>
                <Col>
                <HornedBeast keyword={this.props.imgdata[19].keyword} imageUrl={this.props.imgdata[19].image_url} description={this.props.imgdata[19].description} title={this.props.imgdata[19].title}/>
                    </Col>
                </Row>
            </Container>
            </main> 
        )
    }
}















export default Main;