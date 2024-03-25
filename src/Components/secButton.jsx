import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function secButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return ( 
    <>
      <button variant="primary" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Thanh"
                    autoFocus
                />

                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Dinh"
                />
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@gmail.com"
                /> 
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="0123456789"
                />
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                    type="Date"
                />
                <Form.Label>Gender</Form.Label>
                <FloatingLabel controlId="floatingSelect" label="What is your gender?">
                <Form.Select aria-label="Floating label select example">
                    <option>Click to choose</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">I perfer not to say</option>
                </Form.Select>
                </FloatingLabel>

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default secButton;