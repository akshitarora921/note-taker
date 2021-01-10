import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Notes from "./Notes";

import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./Calender";

function App() {
  return (
    <div className='App'>
      <h2 className='text-center'>Note Taker</h2>
      <Container fluid>
        <Row>
          <Col xs='12' md='4' className='p-3'>
            <Calendar />
          </Col>
          <Col className='p-3'>
            <Notes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
