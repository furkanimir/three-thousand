import React, { useState } from 'react'
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';


function DeleteItemModal({ item, show, handleClose }) {

  // const [id, setId] = useState(null);
  // const [type, setType] = useState(null);
  const [header, setHeader] = useState(item.header);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [img, setImg] = useState(item.img); 

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
        // window.location.reload();
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
      type: type,
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
        console.log(id + ", " + header + ", " + type + ", "
          + description.slice(0, 10) + ", "
          + img.slice(0, 10) + ", " + price)
        handleClose(); // Modal'ı kapatmak için kullanılabilir.
        // window.location.reload(); // Sayfayı yenilemek, güncellemelerin görüntülenmesine yardımcı olabilir.
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
                    placeholder="header"
                    defaultValue={item.header}
                    onChange={(e) => setHeader(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={9} md={6}>
                  Item desc :
                  <Form.Control
                    rows={4}
                    as="textarea"
                    type="text"
                    placeholder="açıklama"
                    defaultValue={item.description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Col>
                <Col xs={9} md={6}>
                  <Row>
                    Item type :
                    <Form.Control
                      type="text"
                      disabled
                      readOnly
                      defaultValue={item.type}
                    />
                  </Row>
                  <Row xs={2} md={2}>
                    <Col style={{ flex: 1 }}>
                      fiyat
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="price"
                        defaultValue={item.price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className='mb-5'>
                <Form.Control
                  type="text"
                  placeholder="imgURL"
                  defaultValue={item.img}
                  onChange={(e) => setImg(e.target.value)}
                />
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
        <Button variant="success" onClick={() => { updateMenuItem(item.id, description, header, img, price, item.type) }}>
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