import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../style/FoodCard.css"

const FoodCard = ({id, idx, linkToPage, title, img, auth, saveRecipe, isRecipeSaved, savedRecipes, setSavedRecipes}) => {
  
  const [saved, setSaved] = useState(isRecipeSaved);
  
  const handleSave = () => {
    saveRecipe({id, idx});
    setSaved(true)
  };

  useEffect(() => {
    // Update the local state when isRecipeSaved prop changes
    setSaved(isRecipeSaved);
  }, [id]);

  //onClick to allow user clicking  
  
  return (
    <Card className="foodCard" style={{maxWidth: '18rem', maxHeight: "22rem", minHeight: "22rem", borderRadius: "20px"}}>
      <Link to={linkToPage}>
      <Card.Img variant="top" src={img} style={{borderRadius: "20px"}}/>
      </Link>
      <Card.Body style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Card.Title className="text-center">
          <div style={{maxHeight: "40px", minHeight: "60px", overflow: "hidden"}}>
            <Link  style={{textDecoration: "none", color: "black"}} to={linkToPage}>{title}</Link>
          </div>
          </Card.Title>
        {auth.currentUser ? (
          saved ? (
            <Button disabled='true' title ="Already Saved" style={{backgroundColor: 'blue', color: "white", borderRadius: "10px", height: "35px"}}>Saved</Button>
          ) : (
            <Button variant="success" onClick={handleSave} style={{color: "white", borderRadius: "10px", height: "35px"}}>Save</Button>
          )
         
        ) : (
          <Button disabled='true' title ="Must login to save" style={{backgroundColor: 'grey', color: "white", borderRadius: "10px", height: "35px"}}>Must Login To Save</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
