import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import React from 'react'

const Third = () => {
  return (
    <div>
        <Container fluid='xxl' className='container'>
      <Row>
          <Col className='cool'>1</Col>
        </Row>

        <Row>
          <Col xs={1} className='cool'>1</Col>
          <Col xs={11} className='cool'>1</Col>
        </Row>

        <Row>
          <Col xs={2} className='cool'>1</Col>
          <Col xs={10} className='cool'>1</Col>
        </Row>

        <Row>
          <Col xs={3} className='cool'>1</Col>
          <Col xs={9} className='cool'>1</Col>
        </Row>

        <Row>
          <Col xs={4} className='cool'>1</Col>
          <Col xs={8} className='cool'>1</Col>
        </Row>

        <Row>
          <Col xs={5} className='cool'>1</Col>
          <Col xs={7} className='cool'>1</Col>
        </Row>

        <Row>
          <Col xs={6} className='cool'>1</Col>
          <Col xs={6} className='cool'>1</Col>
        </Row>
        </Container>
    </div>
  )
}

export default Third
