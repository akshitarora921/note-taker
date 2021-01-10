import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNote, deleteANote, editNote } from "../store/rootSlice";

function NoteModal({ show, handleClose, data }) {
  const dispatch = useDispatch();
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    if (data) {
      // console.log("hello");
      const payload = {
        ...data,
        title: title,
        description: description,
      };
      dispatch(editNote(payload));
    } else {
      // console.log("hello1");
      const payload = {
        id: Date.now(),
        title: title,
        description: description,
        dateCreated: new Date(),
      };
      dispatch(addNote(payload));
    }
    setTitle("");
    setDescription("");
    onClose();
  }

  function onClose() {
    setTitle("");
    setDescription("");
    handleClose();
  }
  function deleteNote() {
    // console.log(data);
    dispatch(deleteANote(data.id));
    onClose();
  }

  useEffect(() => {
    if (data) {
      setHeading("Edit");
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{heading} Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size='lg'
          type='text'
          placeholder='Title'
        />
        <br />
        <Form.Control
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          as='textarea'
          rows={3}
          placeholder='Description'
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleSubmit}>
          Save
        </Button>
        {data ? (
          <Button variant='danger' onClick={deleteNote}>
            Delete
          </Button>
        ) : (
          <Button variant='secondary' onClick={onClose}>
            Discard
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default NoteModal;
