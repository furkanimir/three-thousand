import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";




function Navbarrk() {
  return (
      <div>
        <Navbar className='px-3' style={{ backgroundColor: '#32a852' }} data-bs-theme="dark">
          <Navbar.Brand href="#home">Pizza Page_Nav</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/pizzapage"} style={{ color: 'white' }} >Pizza</Nav.Link>
            {/* <Link to="/FirstPage" style={{ color: 'white' }}>First Page</Link> */}
          </Nav>

        </Navbar>
      </div>
  );
}

export default Navbarrk;