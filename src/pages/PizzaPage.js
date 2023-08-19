import React from 'react'
import Navbarrk from '../components/Navbarrk';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import Order from '../components/Order';
import Summary from '../components/Summary';
import { useFormik } from 'formik';

const validate = (values) => {
    const errors = {};

    if (!values.size) {
        errors.size = "Required size";
    }
    if (!values.crust) {
        errors.crust = "Required crust";
    }
    return errors;
};

const PizzaPage = () => {

    const formik = useFormik({
        initialValues: {
            size: "",
            crust: "",
            cheese: {
                includes: false,
                value: "normal",
            },
            sauce: {
                includes: false,
                value: "robustInspiredTomatoSauce",
            },
            toppingMeat: [],
            toppingNonMeat: [],
            specialInstruction: "",
        },
        onSubmit: (values) => {},
        validate,
    });

    return (
        <>
            <Navbarrk />
            <Container className='my-4'>
                <Card className='shadow-sm p-4'>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col md={8}>
                                <Order formik={formik} />
                            </Col>
                            <Col md={4}>
                                <Summary formik={formik} />
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </>







    )
}

export default PizzaPage;