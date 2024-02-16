import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FoodCard = ({img, title}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">Save</Button>
      </Card.Body>
    </Card>
  );
}


export default FoodCard
