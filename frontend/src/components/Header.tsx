import "../style/Header.css";
import "../style/style.css";
import mainLogo from "../images/icons/main_logo.png";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home">
          <a href="/" id="logo">
            <img src={mainLogo} alt="" />
          </a>
        </Navbar.Brand>
        <Navbar.Brand href="/">Дархан Дээд Сургууль</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/news">МЭДЭЭ</Nav.Link>
            <Nav.Link href="#link">БАГШ НАР</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Бидний тухай</Nav.Link>
            <Nav.Link href="#link">Элсэлт</Nav.Link>
            <Nav.Link href="#link">Эрдэм шинжилгээ</Nav.Link>
            <Nav.Link href="#link">Төгсөгчид</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
{
  /* <ul>
            <li>
              <Link to="/">Нүүр Хуудас</Link>
            </li>
            <li>
              <Link to="/services">Мэдээ</Link>
            </li>
            <li>
              <Link to="/prices">Prices</Link>
            </li>
            <li>
              <Link to="/contact">Contuct Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul> */
}
{
  /* </div>
        <div>{user ? user.email : <button>Нэвтрэх</button>}</div>
      </div>
    </div> */
}
