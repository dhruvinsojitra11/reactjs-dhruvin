import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


function AutoLayoutExample() {
  return (
    <div className='main'>
      <div className='container-fluid'>
        <Container>

          <Row>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">1</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">4</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">4</Col>
              </Row>
            </Col>
            <Col>
              <Row className="pe-4">
                <Col className="boxs">4</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4 }}>
              <Row className="pe-2">
                <Col className="boxs" >4</Col>
              </Row>
            </Col>
            <Col md={{ span: 8 }}>
              <Row className="pe-4">
                <Col className="boxs">8</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6 }}>
              <Row className="pe-2">
                <Col className="boxs">6</Col>
              </Row>
            </Col>
            <Col md={{ span: 6 }}>
              <Row className="pe-2">
                <Col className="boxs">6</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className='boxs' md={{ span: 12 }}>12</Col>
          </Row>
          <Row>
            <Col className='boxs' md={{ span: 4 }}>4</Col>
            <Col className='boxs' md={{ span: 4, offset: 4 }}> span: 4, offset: 4</Col>
          </Row>
          <Row>
            <Col className='boxs' md={{ span: 3, offset: 3 }}>span: 3, offset: 3</Col>
            <Col className='boxs' md={{ span: 3, offset: 3 }}> span: 3, offset: 3</Col>
          </Row>
          <Row>
            <Col className='boxs' md={{ span: 4, offset: 4 }}> span: 4, offset: 4</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AutoLayoutExample;