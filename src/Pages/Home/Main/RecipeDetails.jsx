import React from 'react';
import { useLoaderData,  useParams } from 'react-router-dom';
import SingleRecipeDetail from './SingleRecipeDetail';


const RecipeDetails = () => {
    
    const {_id} = useParams();
    const recipeDetail =useLoaderData();

    return (
        <div>
            {
                recipeDetail.map(recipeDetail => <SingleRecipeDetail key={recipeDetail._id} recipeDetail={recipeDetail}></SingleRecipeDetail>)
            }
        </div>
    );
};

export default RecipeDetails;