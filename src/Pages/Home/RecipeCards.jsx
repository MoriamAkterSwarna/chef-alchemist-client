import React, { useEffect, useState } from 'react';
import SingleRecipe from './SingleRecipe';



const RecipeCards = () => {
 
   
    const [recipe, setRecipe] = useState([]);
    const [spinner, setSpinner] =useState(true);
    useEffect(() =>{
        setSpinner(true)
        fetch("https://cooking-alchemist-server-moriamakterswarna.vercel.app/category")
        .then(res => res.json())
        .then(data => {setRecipe(data)
        setSpinner(false)})
    },[])
    if(spinner){
        return <progress className="progress w-96 bg-emerald-400 mx-auto"></progress>;
    }
    return (
        <>
        <div className='text-center mt-10'>
            <h2 className='text-4xl title-text'>Chef Info: </h2>
        </div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 sm:max-w-fit lg:gap-4'>
            {
                recipe.map(recipe =>  <SingleRecipe key={recipe._id} recipe={recipe}></SingleRecipe>)
            }
        </div>
        </>
    );
};

export default RecipeCards;