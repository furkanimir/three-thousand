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

  const updateMenuItem = async (id, description, header, img, price, type) => {
    console.log(`Ürün güncelleniyor - ID: ${id}`);

    const updatedData = { ///hala çalışmıyor, sabah bakarsın, 29.08
      id: id,
      description: description,
      header: header,
      img: img,
      price: parseInt(price),
      type: type
    }

    if (!id) {
      console.error('Güncellenecek öğe bulunamadı');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/v1/menus/ekle`, {
        method: 'PUT', // Güncelleme işlemi için PUT kullanılıyor.
        headers: {
          'Content-Type': 'application/json',
          // Diğer gerektiğinde başlıkları ekleyebilirsiniz.
        },
        body: JSON.stringify(updatedData), // Güncellenmiş verileri JSON formatında gönderiyoruz.
      });

      if (response.status === 200) {
        console.log('Ürün başarıyla güncellendi.');
        handleClose(); // Modal'ı kapatmak için kullanılabilir.
        window.location.reload(); // Sayfayı yenilemek, güncellemelerin görüntülenmesine yardımcı olabilir.
      } else {
        console.error('Ürün güncellenemedi. Sunucu yanıtı:', response.status);
      }
    } catch (error) {
      console.error('Ürün güncelleme işlemi başarısız oldu:', error);
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
            <div className=''>
              <Row className='mb-4 d-flex justify-content-between align-items-center'>
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
                  <Form.Label style={{ flex: 1, fontWeight: 'bold' }}>Item Header</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="{item.header}"
                    defaultValue={item.header}
                  />
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={9} md={6}>
                  Item desc :
                  <Form.Control
                    rows={4}
                    as="textarea"
                    type="{item.description}"
                    placeholder="açıklama"
                    defaultValue={item.description}
                  />
                </Col>
                <Col xs={9} md={6}>
                  <Row>
                    Item type :
                    <Form.Control
                      type="{item.type}"
                      disabled
                      readOnly
                      placeholder="açıklama"
                      defaultValue={item.type}
                    />
                  </Row>
                  <Row xs={2} md={2}>
                    <Col style={{flex:1}}>
                    deneme
                    </Col>
                    <Col>
                      <Form.Control
                        type="{item.price}"
                        placeholder="price"
                        defaultValue={item.price}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={9} md={6}>
                  Item price :
                  <Form.Control
                    type="{item.price}"
                    placeholder="price"
                    defaultValue={item.price}
                  />
                </Col>
                <Col xs={9} md={6}>
                  Item type :
                  <Form.Control
                    type="{item.type}"
                    disabled
                    readOnly
                    placeholder="açıklama"
                    defaultValue={item.type}
                  />
                </Col>
              </Row>
            </div>

          </Form.Group>

          {/* <h5>Ad: {item.header}</h5> */}
          {/* Daha fazla özellik ekleyebilirsiniz */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="success" onClick={() => { updateMenuItem(item.id, item.description, item.header, item.img, item.price) }}>
          güncelle
        </Button>
        <Button variant="danger" onClick={() => { denemeSonrayatis(item.id, item.header) }}>
          Sil
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteItemModal