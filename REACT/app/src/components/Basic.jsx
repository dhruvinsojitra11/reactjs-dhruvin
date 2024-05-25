import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFirefoxBrowser } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaGooglePlusG } from "react-icons/fa";


function Basic(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img class='h-48' variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <p class='text-blue-950 font-bold'>Web developer</p>
        <Card.Text class='pt-2 pb-2'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div class='flex ml-16 pt-2 gap-4'>
          <FaFacebook class='text-blue-950 size-6' />
          <FaTwitter class=' text-sky-500 size-6' />
          <FaFirefoxBrowser class=' text-pink-500 size-6' />
        </div>
      </Card.Body>
    </Card>

  );
}


export default Basic

export function Example(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img class='h-48' variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <div class='flex gap-1 text-pink-800'>
          <TbToolsKitchen2 />
          <p class='-mt-1 font-bold'>Culinary</p>
        </div>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text class='pt-2 pb-2'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='hello'>BUTTON</Button>
      </Card.Body>
    </Card>
  );
}

export function Example1(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img class='h-48' variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text class='pt-2 pb-2'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='hell1'>

        <Button className='hell'>BUTTON</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export function Basics(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <div class='relative'>
        <Card.Img class='h-48 relative' variant="top" src="https://media.istockphoto.com/id/1061223708/photo/abstract-pink-background-pink-paper-in-pastel-colours-bright-halftone-pattern-light-paper.jpg?s=612x612&w=0&k=20&c=5OACHaF6WwkVkbPhBF5nG02iIHJqoc3b_l7fUpiX2oU=" />
        <h1 class='font-black text-white -mt-40 ml-20 absolute text-2xl'>Anna Smith</h1>
        <p class='-mt-32 ml-[88px] absolute text-white'>Graphic designer</p>
        <FaFacebook class='absolute -mt-20 ml-20 size-7 drop-shadow-md rounded-full border-black text-pink-200' />
        <FaTwitter class='absolute -mt-20 ml-32 size-7 drop-shadow-md rounded-full text-pink-200' />
        <FaGooglePlusG class='absolute -mt-20 ml-44 size-7 drop-shadow-md rounded-full text-pink-200' />
      </div>
      <Card.Body>
        <Card.Text class='pt-2 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, non quibusdam provident, voluptate nisi, magni neque doloribus deserunt eos natus libero atque a magnam laborum odit autem quod id quos!
        </Card.Text>
      </Card.Body>
    </Card>

  );
}