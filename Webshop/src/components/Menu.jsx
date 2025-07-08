import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useContext } from 'react'
import { CartSumContext } from '../context/CartSumContext'
import { AuthContext } from '../context/AuthContext';

function Menu() {
  const { cartSum } = useContext(CartSumContext);
  const {loggedIn, setLoggedIn} = useContext(AuthContext);

  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shops">Shops</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            {loggedIn === true && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
            {<button onClick={() => setLoggedIn(false)}>Log out</button>}
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Link to="/parcelmachines">Parcel machines</Link>
            <div>{cartSum.toFixed(2)}€</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
