import './App.css';
// import './components/Navbar.css'
// import First from './components/First';
// import Second from './components/Second';
// import Third from './components/Third';
// import Fourth from './components/Fourth';
// import Basic from './components/Basic';
// import Link from './components/Link';
// import { Basics } from './components/Basic';
// import { Example } from './components/Basic';
// import { Example1 } from './components/Basic';
// import Container from 'react-bootstrap/Container';
// import BasicExample from './components/bootstrap';
// import Cond from './components/Cond';
import React from 'react';

function App(props) 
{
  return (
    <>

    <Cond/>

      <First />
      <Second />
      <Third />
      <Fourth />

      <br className='br' />

      <h1 class="flex justify-center font-black">Fifth Task</h1>

      <br className='br' />

      <Container>

        <div className='console'>
          <BasicExample name='Console' button='Go Anywhere' />
          <BasicExample name='Playground' button='Go Anywhere' />
          <BasicExample name='Adventure' button='Go Anywhere' />
        </div>

      </Container>

      <br className='br' />

      <h1 class="flex justify-center font-black">Sixth Task</h1>

      <br className='br' />

      <Container>

        <div class='alice'>
          <Link name='Alice Mayer' />
          <Example name='Cheat day inspirations' />
          <Basic name='Billy Cullen' />
        </div>

      </Container>

      <br className='br' />

      <h1 class="flex justify-center font-black">Seventh Task</h1>

      <br className='br' />

      <Container>

        <div class='billy'>
          <Basics />
          <Basic name='Billy Cullen' />
          <Example1 name='Card title' />
        </div>

      </Container>

      <br className='br' />
    </>
  );
}

export default App;