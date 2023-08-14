import React from 'react'
import Navbarrk from '../components/Navbarrk';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import Order from '../components/Order';
import Summary from '../components/Summary';


const PizzaPage = () => {
    return (
        <>
            <Navbarrk />
            <Container className='my-4'>
                <Card className='shadow-sm p-4'>
                    <Form>
                        <Row>
                            <Col md={8}>
                            <Order />
                            </Col>
                            <Col md={4}>
                            <Summary/>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </>






    )
}

export default PizzaPage;