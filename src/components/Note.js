import { format } from "date-fns";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NoteModal from "./NoteModal";

function Note({ index, data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NoteModal show={show} handleClose={handleClose} data={data} />
      <Container className='shadow p-3 mb-3 bg-white rounded' fluid>
        <Row>
          <Col xs={2} className='text-center'>
            {index}
          </Col>
          <Col xs={5} md={7} className='h5 fw-bold'>
            {data?.title}
          </Col>
          <Col xs={5} md={3}>
            {format(new Date(data?.dateCreated), "dd-MM-yyyy")} <br />{" "}
            <Button onClick={handleShow} variant='primary'>
              Edit
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Note;
