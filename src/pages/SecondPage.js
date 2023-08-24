import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import Navbarrk from '../components/Navbarrk'
import DigitalQr from '../components/Figma/DigitalQr';


const SecondPage = () => {

  const [data, setData] = useState("");
  // const [loading, setLoading] = useState(false);
  // const apiUrl = 'http://localhost:8080/api/v1/menus/all';


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

  const seenTypes = [];

  const kahvaltiItems = values.filter(item => item.type === "kahvalti");
  const breakfastItems = values.filter(item => item.type === "kahvalti");




  return (
    <div>
      <div>
        <Navbarrk />
      </div>
      <Container>

        <Card>
          <Card.Body>
            <Card.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Card Title</Card.Title>
            <Card.Text>
              {kahvaltiItems.map((item, index) => (
                  <Card key={index}>
                    <Card.Title>{item.header}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card>
                ))}
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
      <DigitalQr />
    </div>
  )
}

export default SecondPage