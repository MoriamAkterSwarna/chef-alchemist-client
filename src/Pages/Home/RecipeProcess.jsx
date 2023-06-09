import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const RecipeProcess = ({recipes}) => {
    const [favorite, setFavorite] =useState(false)
    const [fold, setFold] = useState(true)

    const{recipe_name,ingredients,cooking_method,rating} =recipes;
    
    const handleFavorite = () => {
        toast.success('Successfully Bookmarked!');
        setFavorite(true)
    }
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl border-2 mb-10 mx-auto h-full ">
  <div className="card-body">
    <h2 className="card-title"><span className='font-bold'>Recipe: </span>{recipe_name}</h2>

    <div>
        <p className='font-bold'>Ingredients: </p>
        <>
        {
            ingredients.map(ing => <li>{ing}</li>)
        }
    </>
    </div>
    <div>
        <p className='font-bold'>Cooking Process: </p>
        <ol>
            {
                
                cooking_method.map(cooking => <p>{cooking}</p>)

            }
        </ol>
    </div>
    <p><span className='font-bold'>Rating: </span>{rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary " onClick={handleFavorite} disabled={favorite}>Add to Favorites</button>
    </div>
  </div>
</div>
<Toaster />
        </div>
    );
};

export default RecipeProcess;