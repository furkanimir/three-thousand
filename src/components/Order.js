import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'

function Order() {
    const toppings = [
        { name: "Foo", id: "foo" },
        { name: "Bar", id: "bar" },
        { name: "Baz", id: "baz" },
        { name: "Foo", id: "foo" },
        { name: "Bar", id: "bar" },
        { name: "Baz", id: "baz" }
    ];
    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Size & Crust
                    </Card.Title>
                    <Form>
                        <Form.Group className='py-3'>
                            <Row>
                                <Col md={6}>
                                    <div className='mb-3'>
                                        <Form.Check
                                            name="pizza size"
                                            type="radio"
                                            id={`small`}
                                            label={`small`}
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='mb-3'>
                                        <Form.Check
                                            name="pizza size"
                                            type="radio"
                                            id={`medium`}
                                            label={`medium`}
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='mb-3'>
                                        <Form.Check
                                            name="pizza size"
                                            type="radio"
                                            id={`bigger`}
                                            label={`bigger`}
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='mb-3'>
                                        <Form.Check
                                            name="pizza size"
                                            type="radio"
                                            id={`N`}
                                            label={`N`}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                    <hr></hr>
                </Card.Body>
            </Card>
            {/* Chesee and Sauce */}
            <Row>
                <Col>
                    <Card className='my-3'>
                        <Card.Body>
                            <Card.Title style={{ display: 'flex' }}>
                                Cheese
                                <Form.Check
                                    className='mx-2'
                                    type='checkbox'
                                    id={`default-`}
                                />
                            </Card.Title>
                            <Form.Select>
                                <option value="light">Light</option>
                                <option value="narmal">Normal</option>
                                <option value="extra">Extra</option>
                            </Form.Select>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='my-3'>
                        <Card.Body>
                            <Card.Title style={{ display: 'flex' }}>
                                Sauce
                                <Form.Check
                                    className='mx-2'
                                    type='checkbox'
                                    id={`default-`}
                                />
                            </Card.Title>
                            <Form.Select>
                                <option value="ranch">Ranch</option>
                                <option value="barbecue">Barbecue</option>
                                <option value="tomatoSauce">Tomato Sauce</option>
                            </Form.Select>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* Toppings */}
            <Card className='my-3'>
                <Card.Body>
                    <Card.Title style={{ display: 'flex' }}>Topping - Meat</Card.Title>
                    <Row className='mt-3'>
                        {toppings.map((top, index) => (
                            <Col md={3}>
                                <Form.Check
                                    key={index}
                                    className='mx-2'
                                    type='checkbox'
                                    id={`${top.id}`}
                                    label={`${top.name}`}
                                />
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Order