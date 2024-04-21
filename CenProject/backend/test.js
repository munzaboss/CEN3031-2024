// Import necessary Firebase SDK modules
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { DBgetSavedRecipes } from './src/database.js';



// Define a function to test DBgetSavedRecipes
async function testDBgetSavedRecipes() {
  const userID = 'aOykma5NPQQiALYIqiJewwsNwi93'; // Replace with the user ID you want to test
  try {
    const savedRecipes = await DBgetSavedRecipes(userID);
    console.log('Saved Recipes:', savedRecipes);
  } catch (error) {
    console.error('Error fetching saved recipes:', error);
  }
}

// Call the test function
testDBgetSavedRecipes();
