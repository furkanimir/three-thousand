import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarrk() {
  return (
    <Navbar className='px-3' style={{backgroundColor:'#32a852'}} data-bs-theme="dark">
        <Navbar.Brand href="#home">Pizza Page_Nav</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link style={{color:'white'}} href="#home">Home</Nav.Link>
        </Nav>

    </Navbar>
  );
}

export default Navbarrk;