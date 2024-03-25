import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function firstButton() {
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
          <Modal.Title>General</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" autoFocus/>

                <Form.Label>User Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="@username"
                />

                <Form.Label>Your Bio</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Text here!!!"
                />
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

export default firstButton;