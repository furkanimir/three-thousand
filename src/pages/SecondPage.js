import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import Navbarrk from '../components/Navbarrk'


const SecondPage = () => {

    const [data, setData] = useState([]);
    const apiUrl = 'http://localhost:8080/api/v1/menus/all';

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Veri çekme hatası:', response.status);
          }
          const jsonData = await response.json();
          setData(jsonData);
          console.log(data);
        } catch (error) {
          console.error('Veri çekme hatası:', error);
        }
      }

      fetchData();
    }, []);

    return (
        <div>
            <div>
                <Navbarrk />
            </div>
            <Container>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {data.map(item => (
                                <li key={item.id}>{item.header}</li>
                            ))}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default SecondPage