import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function Navbarrk() {
  return (
    <Navbar className='px-3' style={{backgroundColor:'#32a852'}} data-bs-theme="dark">
        <Navbar.Brand href="#home">Pizza Page_Nav</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} style={{color:'white'}} href="/">Home</Nav.Link>
          {/* <Link to="/FirstPage" style={{ color: 'white' }}>First Page</Link> */}
        </Nav>

    </Navbar>
  );
}

export default Navbarrk;