import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Summary(props) {
  const {formik} = props;
  return (
    <Card>
      <Card.Img variant="top" src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900" />
      <Card.Body>
        <Card.Title>Summary JSON</Card.Title>
        <Card.Text>
          <pre>{JSON.stringify(formik.values,null,2)}</pre>
        </Card.Text>
      </Card.Body>
      <Button variant="danger" type='Submit' className='mt-5'>Place Order</Button>
    </Card>
  )
}

export default Summary