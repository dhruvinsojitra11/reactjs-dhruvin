import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import React from 'react'

const First = () => {
  return (
    <div>
      <Container fluid='xxl' className='container'>
        <Row>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
          <Col className='ex'>col-md-1</Col>
        </Row>

        <br className='br' />

        <Row>
          <Col xs={8} className='ex'>col-md-8</Col>
          <Col className='ex'>col-md-4</Col>
        </Row>

        <br className='br' />

        <Row>
          <Col xs={4} className='ex'>col-md-4</Col>
          <Col xs={4} className='ex'>col-md-4</Col>
          <Col xs={4} className='ex'>col-md-4</Col>
        </Row>

        <br className='br' />

        <Row>
          <Col xs={6} className='ex'>col-md-6</Col>
          <Col xs={6} className='ex'>col-md-6</Col>
        </Row>

      </Container>
    </div>
  )
}

export default First
