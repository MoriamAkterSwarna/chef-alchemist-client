import React from 'react';
import RecipeProcess from '../RecipeProcess';
import LazyLoad from 'react-lazy-load';

const SingleRecipeDetail = ({recipeDetail}) => {
    console.log(recipeDetail)
    const {_id,likes,name,num_recipes,years_of_experience,picture,category__id,description,recipes
    } =recipeDetail;
    return (
       <>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mb-10 lg:pl-10 py-10 bg-purple-100'>
            <div>
            <LazyLoad width={1024} height={762} offset={300}>
                <img src={picture} className='rounded-full' alt="" />
                </LazyLoad>
            </div>
            <div className='sm:mt-2 lg:ml-20 lg:mt-40'>
                <h3 className='text-2xl font-bold text-fuchsia-700'>Chef Name: {name}</h3>
                <p className='mt-3'><span className='font-bold text-xl'>Short Description: </span>{description}</p>
                <p className='mt-6'><span className='font-bold text-xl'>Likes:</span> {likes}</p>
                <p><span className='font-bold text-xl'>Number of Recipes:</span> {num_recipes}</p>
                <p><span className='font-bold text-xl'>Experience in Years:</span> {years_of_experience}</p>

            </div>

            
           
        </div>
         <div className='grid grid-cols-3'>
         {
            recipes.map(recipes => <RecipeProcess key={recipes._id} recipes={recipes}></RecipeProcess>)
        }
         </div>
       </>
    );
};

export default SingleRecipeDetail;