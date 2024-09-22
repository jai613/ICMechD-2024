import { Button, Alert, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
function NavbarTemplate() {
    return (
        <Navbar expand="lg" className='custom-navbar'>
            <Container>
                <Navbar.Brand href="#home" className="d-inline-flex align-items-center">
                <img
                    src='src/assets/download.png'  
                    width="80"  
                    height="50"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
                <span className="ms-2">ICMechD 24</span>
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    
                    <NavDropdown title="General Information" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Themes/Topics</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Schedule</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Submission and Participation" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Abstracts Submitted</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Payment</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Committee" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Guest Editors</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Organizers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Advisory Committee</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">About SSN</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Sponsorship</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">How to reach SSN</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Accommodation</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Govt. Approval</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}


export default NavbarTemplate;