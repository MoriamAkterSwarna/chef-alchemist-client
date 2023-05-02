import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const RecipeProcess = ({recipes}) => {
    const [favorite, setFavorite] =useState(false)

    console.log(recipes);
    const{recipe_name,ingredients,cooking_method} =recipes;
    
    const handleFavorite = () => {
        toast.success('Successfully Bookmarked!');
        setFavorite(true)
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border-2 mb-10 mx-auto">
  <div className="card-body">
    <h2 className="card-title"><span className='font-bold'>Recipe: </span>{recipe_name}</h2>

    <div>
        <p className='font-bold'>Ingredients: </p>
        <ol>
        {
            ingredients.map(ing => <li>{ing}</li>)
        }
    </ol>
    </div>
    <div>
        <p className='font-bold'>Cooking Process: </p>
        <ol>
            {
                cooking_method.map(cooking => <p>{cooking}</p>)
            }
        </ol>
    </div>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleFavorite} disabled={favorite}>Add to Favorites</button>
    </div>
  </div>
</div>
<Toaster />
        </div>
    );
};

export default RecipeProcess;