import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const FoodCard = ({img, title, identifier}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
          <Card.Title>
            <Link to={{identifier}}>{title}</Link>
          </Card.Title>
        <Button variant="primary">Save</Button>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
