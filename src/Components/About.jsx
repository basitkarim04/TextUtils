import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import '../App.css';
import {useState} from 'react';


export default function About() {

  const [mystyle, setmystyle] = useState({
    color : 'black',
    background: 'white'
    }
  )
  const [btntext, setbtntext] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if(mystyle.color === 'black'  ){
        setmystyle({
            color:'white',
            background: 'black'
        })
        setbtntext("Enable Light Mode ")
    }
    else{
        setmystyle({
            color:'black',
            background: 'white'
        })
        setbtntext("Enable Dark Mode ")
    }
  }
  return (
    <div className="container"  style={mystyle}>
        <h1 className="my-3"> About Us</h1>
      <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body style={mystyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body style={mystyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Form>
      <Form.Check onClick={toggleStyle} className='my-3' type="switch"  id="Change_Theme" label={btntext} />
      </Form>
    </Accordion>
    </div>
  )
}
