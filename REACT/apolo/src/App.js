import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Hello.css'
import Card from './Card';

function App() {
  return (
   <>
   <Container className='container' fluid="xxl">

<Row>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
  <Col className='cols'>col-md-1</Col>
</Row>

<Row>
  <Col xs={3} className='colu'>col-md-3</Col>
  <Col xs={3} className='colu'>col-md-3</Col>
  <Col xs={3} className='colu'>col-md-3</Col>
  <Col xs={3} className='colu'>col-md-3</Col>
</Row>

<Row>
  <Col xs={4} className='colo'>col-md-4</Col>
  <Col xs={4} className='colo'>col-md-4</Col>
  <Col xs={4} className='colo'>col-md-4</Col>
</Row>

<Row>
  <Col xs={8} className='coloo'>col-md-8</Col>
  <Col xs={4} className='coloo'>col-md-4</Col>
</Row>

<Row>
  <Col xs={2} className='colool'>col-md-2</Col>
  <Col xs={2} className='colool'>col-md-2</Col>
  <Col xs={4} className='colool'>col-md-4</Col>
  <Col xs={2} className='colool'>col-md-2</Col>
  <Col xs={2} className='colool'>col-md-2</Col>
</Row>

<Row>
  <Col xs={6} className='colol'>col-md-6</Col>
  <Col xs={6} className='colol'>col-md-6</Col>
</Row>
<Row>
  <Col className='coolol'>col-md-12</Col>
</Row>

</Container>

<Card/>
</>

);

}

export default App;
