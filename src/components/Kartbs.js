import React from 'react'
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Kartbs.css';


/*                 <Card style={{
                        backgroundImage: "linear-gradient( #189B44, #A0115D)",
                        color: 'wheat'
                    }}>
                        <Card.Body >
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button className='bosluk' size="sm" variant="light" style={{ height: '30px', width: '55px', fontSize: '12px', }}>Light</Button>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card> */

const Kartbs = () => {



    const cardInfo = [
        { title: "Card Title 1", text: "Some quick example text to build on asfdasdfsgasd asfdasdfsgasd asfdasdfsgasd asfdasdfsgasd " },
        { title: "Card Title 2", text: "Some quick example text to build on t" },
        { title: "Card Title 3", text: "Some quick example text to build on t" },
        { title: "Card Title 4", text: "Some quick example text to build on t" },
        { title: "Card Title 5", text: "Some quick example text to build on t" },
        { title: "Card Title 6", text: "Some quick example text to build on t" },
        { title: "Card Title 7", text: "Some quick example text to build on t" },
        { title: "Card Title 8", text: "Some quick example text to build on t" },
        { title: "Card Title 9", text: "Some quick example text to build on t" },
        { title: "Card Title 10", text: "Some quick example text to build on t" },
    ];

    // const maxLength = 70;
    // const truncatedText = cardInfo.text.length > maxLength
    //     ? cardInfo.text.slice(0, maxLength) + "..."
    //     : cardInfo.text;

    const renderCard = (card, index) => {
        const maxLength = 80;
        const truncatedText = card.text.length > maxLength
            ? card.text.slice(0, maxLength) + "..."
            : card.text;
        return (
            <Col className='colcol' key={index} >
                <Card className="box"
                    style={{
                        backgroundImage: "linear-gradient( #189B44, #A0115D)",
                        color: 'wheat',
                        flex: '0 0 20% ',
                        alignItems: 'stretch',

                    }}>

                    <Card.Body className='colcol'>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>{truncatedText}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }

    //gpt

    // const renderCard = (card, index) => {
    //     const maxLength = 20;
    //     const truncatedText = card.text.length > maxLength
    //       ? card.text.slice(0, maxLength) + "..."
    //       : card.text;

    //     return (
    //       <Col className='colcol' key={index}>
    //         <Card className="box"
    //           style={{
    //             backgroundImage: "linear-gradient( #189B44, #A0115D)",
    //             color: 'wheat',
    //             flex: '0 0 20%',
    //             alignItems: 'stretch',
    //           }}>
    //           <Card.Body>
    //             <Card.Title>{card.title}</Card.Title>
    //             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    //             <Card.Text>{truncatedText}</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     );
    //   }

    return (

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">

            {cardInfo.map(renderCard)}


        </Row>


    )
}

export default Kartbs