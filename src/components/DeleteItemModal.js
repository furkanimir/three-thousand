import React, { useState } from 'react'
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';


function DeleteItemModal({ item, show, handleClose }) {


  const denemeSonrayatis = async (id, header) => {
    console.log(id + " : " + header);

    if (!id) {
      console.error('silinecek öge bulunamdi');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/api/v1/menus/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Gerektiğine göre diğer başlıkları ekleyebilirsiniz
        },
      });

      if (response.status === 200) {
        console.log('Ürün başarıyla silindi.');
        handleClose();
        window.location.reload();
      } else {
        console.error('Ürün silinemedi. Sunucu yanıtı:', response.status);
      }
    } catch (error) {
      console.error('Ürün silme işlemi başarısız oldu:', error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Item Detayi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Row>
            <Col xs={6} md={4}>
                <Form.Label style={{ flex: 1 }}>İtem ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="{item.id}"
                  aria-label="Disabled input example"
                  disabled
                  readOnly
                  value={item.id}
                />
              </Col>
              <Col xs={9} md={6}>
                <Form.Label style={{ flex: 1, fontWeight:'bold' }}>Item Header</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="{item.header}"
                  value={item.header}
                />
              </Col>
            </Row>



          </Form.Group>
          <h5>Ad: {item.header}</h5>
          {/* Daha fazla özellik ekleyebilirsiniz */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="danger" onClick={() => { denemeSonrayatis(item.id, item.header) }}>
          Sil
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteItemModal