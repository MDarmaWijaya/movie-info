import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const Navigate = () => {
  return (
    <Navbar variant="dark" className="navigate">
      <Container>
        <Nav className="me-lef">
          <Nav.Link href="#home">
            <h2 data-text="Movie Info" className="myname">
              Movie Info
            </h2>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigate;
