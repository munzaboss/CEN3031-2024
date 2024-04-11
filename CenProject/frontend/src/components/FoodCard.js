import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const FoodCard = ({img, title, linkToPage, saveRecipe}) => {
  const handleSave = () => {
    saveRecipe({img, title, linkToPage, saveRecipe});
  };
  //onClick to allow user clicking
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
          <Card.Title>
            <Link to={linkToPage}>{title}</Link>
          </Card.Title>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
