// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cen3031-cooking-website.firebaseapp.com",
  projectId: "cen3031-cooking-website",
  storageBucket: "cen3031-cooking-website.appspot.com",
  messagingSenderId: "866186810186",
  appId: "1:866186810186:web:2b722bf1350ad56301e7b3",
  measurementId: "G-R4RZ6KL2T0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);



async function DBcreateUser(userID, name, email, image){
  const db = getDatabase(firebaseApp);
  const reference = ref(db,'users/' + userID);
  set(reference, {
    uid: userID,
    name: name,
    email: email,
    userImage: image
  }).then(() => {
    console.log('Data stored succesfuly in database');
  }).catch((error) => {
    console.log('Error storing user data: ', error)
  })
}


async function DBsaveRecipe(userID, recipeID, recipeTitle, recipeImage, recipeLink, summary, instructions){
  const db = getDatabase(firebaseApp);
  const reference = ref(db, 'users/' + userID + '/recipes/' + recipeID);
  set(reference, {
    recipeID: recipeID,
    recipeTitle: recipeTitle,
    recipeImage: recipeImage,
    recipeLink: recipeLink,
    summary: summary,
    instructions: instructions
  })
}


async function DBcheckUser(userID){
  const db = getDatabase(firebaseApp);
  const userRef = ref(db, `users/${userID}`);
  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()){
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking user: ", error);
    throw error;
  }
}

async function DBisRecipeSaved(userID, recipeID){
  const db = getDatabase(firebaseApp);
  const recipeRef = ref(db, `users/${userID}/recipes/${recipeID}`);
  try {
    const snapshot = await get(recipeRef);
    if (snapshot.exists()){
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking recipe: ", error);
    throw error;
  }
}

async function DBDeleteRecipe(userID, recipeID){
  const db = getDatabase(firebaseApp);
  const recipesRef = ref(db, `users/${userID}/recipes/${recipeID}`)
  try {
    await remove(recipesRef);
    console.log(`Recipe ${recipeID} of user ${userID} has been removed.`)
  } catch (error) {
    console.error("Error in deleting recipe: ", error)
  }
  
}
async function DBgetSavedRecipes(userID){
  console.log('okay lets go')
  const db = getDatabase(firebaseApp);
  const recipesRef = ref(db, `users/${userID}/recipes`)
  try {
    const snapshot = await get(recipesRef);

    if (snapshot.exists()){
      const recipesObject = snapshot.val();
      console.log("recipes object: ", recipesObject);
      const recipesArray = Object.keys(recipesObject).map((recipeID) => ({
        ...recipesObject[recipeID], 
        recipeID: parseInt(recipeID)
      }));
      return recipesArray;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error in getting saved recipes: ", error)
  }
}
export { DBcreateUser, DBsaveRecipe, DBcheckUser, DBisRecipeSaved, DBgetSavedRecipes, DBDeleteRecipe };
