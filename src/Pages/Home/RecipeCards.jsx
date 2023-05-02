import React, { useEffect, useState } from 'react';

const RecipeCards = () => {
    // const [recipe, setRecipe] = useState('');
    useEffect(() =>{
        fetch("http://localhost:5000/category")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h3>Recipe</h3>
        </div>
    );
};

export default RecipeCards;