import Card from 'react-bootstrap/Card';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import React from 'react'

const Link = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img class='h-48' variant="top" src="https://picsum.photos/200/300" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <p class='text-blue-950 font-bold'>Photographer</p>
                    <Card.Text class='pt-2 pb-2'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <div class='flex ml-16 pt-2 gap-4'>
                        <FaLinkedinIn class='text-blue-800'/>
                        <FaTwitter class='text-sky-500' />
                        <FaFacebook class='text-blue-950' />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Link
