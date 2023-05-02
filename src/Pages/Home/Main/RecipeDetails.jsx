import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipeDetail from './SingleRecipeDetail';

const RecipeDetails = () => {
    const {id} = useParams();
    const recipeDetail =useLoaderData();
    console.log(recipeDetail)
    return (
        <div>
            {
                recipeDetail.map(recipeDetail => <SingleRecipeDetail key={recipeDetail.id} recipeDetail={recipeDetail}></SingleRecipeDetail>)
            }
        </div>
    );
};

export default RecipeDetails;