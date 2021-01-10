import { format, isSameDay } from "date-fns";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Note from "./components/Note";
import NoteModal from "./components/NoteModal";

import { search } from "./store/rootSlice";

function Notes() {
  const [input, setInput] = useState("");
  const [filtedNotes, setFiltedNotes] = useState([]);
  const notes = useSelector((state) => state.notes);
  const date = useSelector((state) => state.selectedDate);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setFiltedNotes(
      notes.filter((note) => {
        // console.log(new Date(note.dateCreated), new Date(date));
        return isSameDay(new Date(note.dateCreated), new Date(date));
      })
    );
  }, [date, notes]);
  return (
    <>
      <NoteModal show={show} handleClose={handleClose} />
      <Container fluid>
        <Row className='justify-space-between align-middle'>
          <Col className='h3'> {format(new Date(date), "dd-MM-yyyy")} </Col>
          <Col xs='2'>
            <Button onClick={handleShow}>+</Button>{" "}
          </Col>
        </Row>
        <hr />
        <Row className='py-2'>
          <Col>
            <Form.Control
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                dispatch(search(e.target.value));
              }}
              size='lg'
              type='text'
              placeholder='Search a Note'
            />
          </Col>
        </Row>
        {filtedNotes.map((note, index) => (
          <Note key={note.id} index={index + 1} data={note} />
        ))}
      </Container>
    </>
  );
}

export default Notes;
