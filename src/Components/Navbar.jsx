import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import '../App.css';

function ColorSchemesExample(props) {

  return (
    <>
       <Navbar className={`navbar navbar-expand-lg navbar-${props.Mode === 'light' ? 'light' : 'dark'} bg-${props.Mode}`}>
        <Container>
          <Navbar.Brand href="#home">TEXT UTILS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
           <Form>
            <Form.Check
              type="switch"
              id="flexSwitchCheckDefault"
              label="Enable DarkMode"
              checked={props.Mode === 'dark'}
              onChange={() => props.toggleMode()}
            />
          </Form> 
         </Container>
        
      </Navbar>
    </>
  );
}
ColorSchemesExample.propTypes = {
  Mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

function Textbox(props) {
  const [copyMessage, setCopyMessage] = useState('');
  const [text, setText] = useState('');
  function handleChange(event) {
    setText(event.target.value);
    }
  


  const handlleUpClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);

  }
  const handlledownClick = () => {
    // console.log("DownCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);

  }
  const handlleclearClick = () => {
    let newText = " ";
    setText(newText);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
        .then(() => {
          setCopyMessage('Text copied to clipboard');
          setTimeout(() => {
            setCopyMessage('');
        }, 5000); // 5 seconds
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
};


    return (
    <>
    <div>
      <h1>{props.heading} </h1>
  <div className="mb-3 ">
      <textarea className="form-control " value={text} onChange={handleChange} style={{BackgroundColor: props.Mode==='light'? 'grey':'white'}} id="myBox" rows="8" placeholder='Enter text here'>
      </textarea>
      <br></br>
     <button className="btn btn-primary mx-1"  onClick={handlleUpClick} > Convert to UpperCase</button>
     <button  className="btn btn-primary mx-1" onClick={handlledownClick} > Convert to LowerCase</button>
     <button  className="btn btn-primary mx-1" onClick={handlleclearClick} > Clear Text</button>
     <button  className="btn btn-primary mx-1" onClick={handleCopyClick} > Copy Text</button>
     <p className={copyMessage ? 'showMessage' : 'hideMessage'}>{copyMessage}</p>
     </div>
     </div>

<div className='container'>
    <h1>Your Text Summary</h1>
    <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} Words and {text.length} Characters</p>
    <p> {0.008 * text.split(" ").length} Minutes to read these Words </p>
    <h3>Preview</h3>
    <p>{text.length>0?text: "Enter something in the Above text box to preview it here"}</p>
    </div>
 </>
  );
}

    
 
function exporting(props){
  return(  
    <div>
     <ColorSchemesExample Mode={props.Mode} toggleMode={props.toggleMode}/>
     <div className="container" my-3>
     <Textbox heading="Enter the text below to Analyze "/>
     </div>
    </div>
  )
}
export default exporting;

