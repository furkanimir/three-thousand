import React from 'react'
import Kartbs from '../components/Kartbs'
import Container from 'react-bootstrap/Container';
import Navbarrk from '../components/Navbarrk';

const FirstPage = () => {
    return (
        <Container fluid style={{ background: 'blue' }}>
            <Navbarrk />
            <Kartbs />
        </Container>
    )
}

export default FirstPage