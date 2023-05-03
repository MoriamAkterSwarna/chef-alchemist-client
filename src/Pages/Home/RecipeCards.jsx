import React, { useEffect, useState } from 'react';
import SingleRecipe from './SingleRecipe';


const RecipeCards = () => {
   
    const [recipe, setRecipe] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/category")
        .then(res => res.json())
        .then(data => setRecipe(data))
    },[])
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 sm:max-w-fit lg:gap-4'>
            {
                recipe.map(recipe =>  <SingleRecipe key={recipe._id} recipe={recipe}></SingleRecipe>)
            }
        </div>
    );
};

export default RecipeCards;