import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Modal, Row } from 'react-bootstrap'
import Navbarrk from '../components/Navbarrk'
import DigitalQr from '../components/Figma/DigitalQr';


const SecondPage = () => {

  const [data, setData] = useState("");
  // const [loading, setLoading] = useState(false);
  // const apiUrl = 'http://localhost:8080/api/v1/menus/all';

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
;
  }

  const deletedItemInfo = (id) =>{
    console.log(id + " silme denemesi");
  }


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/menus/all');
      const json = await response.json();
      setData(json);
      console.log(data);
    } catch (error) {
      console.error('Veri getirme hatasi:', error);
    }
  };

  const handleClick = () => {
    console.log(data);
  }

  //gpt 3.5
  const values = Object.keys(data).map((key) => data[key]);

  // const seenTypes = [];

  const kahvaltiItems = values.filter(item => item.type === "kahvalti");
  const salataItems = values.filter(item => item.type === "salatalar");
  const makarnaItems = values.filter(item => item.type === "makarnalar");
  const icecekItems = values.filter(item => item.type === "cay");




  return (
    <div>
      <Navbarrk />
      <Container>

        {/* Kahvaltılar */}
        <Card className='my-2' style={{ backgroundColor: '#453433' }}>
          <Card.Body>
            <Card.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Kahvaltılar</Card.Title>
            <Card.Text>
              {kahvaltiItems.map((item, index) => (
                <Card key={index} className='mb-3' style={{ height: '110px' }}>
                  <Card.Title className='mx-2'>{item.header}</Card.Title>
                  <Card.Text className='mx-1'>
                    <Row>
                      <Col xs="auto" md="auto" >
                        <Image src={item.img} style={{ height: '75px', width: '125px' }} />
                      </Col>
                      <Col>
                        {item.description}
                      </Col>
                      <Col xs="auto" md="auto" className='text-center mx-4'>
                        {item.price} ₺
                      </Col>
                    </Row>
                  </Card.Text>
                </Card>
              ))}
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* Salatalar */}
        <Card className='mb-2' style={{ backgroundColor: '#06962d' }}>
          <Card.Body>
            <Card.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Salatalar</Card.Title>
            <Card.Text>
              {salataItems.map((item, index) => (
                <Card key={index} className='mb-3' style={{ height: '110px' }}>
                  <Card.Title className='mx-2'>{item.header}</Card.Title>
                  <Card.Text className='mx-1'>
                    <Row>
                      <Col xs="auto" md="auto" >
                        <Image src={item.img} style={{ height: '75px', width: '125px' }} />
                      </Col>
                      <Col>
                        {item.description}
                      </Col>
                      {/* tutar ve butonlar */}
                      <Col xs="auto" md="auto" className='text-center mx-4'>
                        <Row style={{ textAlign: 'justify', justifyContent: 'center' }}>
                          {item.price} ₺
                        </Row>
                        <Row>
                          {/* düzenleme */}
                          <Col>
                            <Button variant="primary" onClick={handleShow}>
                              Launch demo modal
                            </Button>
                          </Col>
                          {/* silme */}
                          <Col>
                            <Button variant="danger" onClick={handleShow}>
                              Ürünü sil
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>{item.id} id'li [ {item.header} ] ürününü silmek istediğinize emin misiniz</Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Close
                                </Button>
                                <Button variant="danger" onClick={deletedItemInfo(item.id)}>
                                  Evet, eminim
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Makarnalar */}
        <Card className='mb-2' style={{ backgroundColor: '#998806' }}>
          <Card.Body>
            <Card.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Makarnalar</Card.Title>
            <Card.Text>
              {makarnaItems.map((item, index) => (
                <Card key={index} className='mb-3' style={{ height: '110px' }}>
                  <Card.Title className='mx-2'>{item.header}</Card.Title>
                  <Card.Text className='mx-1'>
                    <Row>
                      <Col xs="auto" md="auto" >
                        <Image src={item.img} style={{ height: '75px', width: '125px' }} />
                      </Col>
                      <Col>
                        {item.description}
                      </Col>
                      <Col xs="auto" md="auto" className='text-center mx-4'>
                        {item.price} ₺
                      </Col>
                    </Row>
                  </Card.Text>
                </Card>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* İçecekler */}
        <Card className='mb-2' style={{ backgroundColor: '#99aaa6' }}>
          <Card.Body>
            <Card.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>İçecekler</Card.Title>
            <Card.Text>
              {icecekItems.map((item, index) => (
                <Card key={index} className='mb-3' style={{ height: '110px' }}>
                  <Card.Title className='mx-2'>{item.header}</Card.Title>
                  <Card.Text className='mx-1'>
                    <Row>
                      <Col xs="auto" md="auto" >
                        <Image src={item.img} style={{ height: '75px', width: '125px' }} />
                      </Col>
                      <Col>
                        {item.description}
                      </Col>
                      {/* tutar ve butonlar */}
                      <Col xs="auto" md="auto" className='text-center mx-4'>
                        <Row style={{ textAlign: 'justify', justifyContent: 'center' }}>
                          {item.price} ₺
                        </Row>
                        <Row>
                          {/* düzenleme */}
                          <Col>
                            <Button variant="primary" onClick={handleShow}>
                              Launch demo modal
                            </Button>
                          </Col>
                          {/* silme */}
                          <Col>
                            <Button variant="danger" onClick={handleShow}>
                              Ürünü sil
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>{item.id} id'li [ {item.header} ] ürününü silmek istediğinize emin misiniz</Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Close
                                </Button>
                                <Button variant="danger" onClick={deletedItemInfo(item.id)}>
                                  Evet, eminim
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </Col>
                        </Row>
                      </Col>
                      {/* tutar bitti */}
                    </Row>
                  </Card.Text>
                </Card>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

      </Container>
      <DigitalQr />
    </div>
  )
}

export default SecondPage