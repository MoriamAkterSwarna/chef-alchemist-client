import React from 'react';
import RecipeProcess from '../RecipeProcess';
import LazyLoad from 'react-lazy-load';

const SingleRecipeDetail = ({recipeDetail}) => {
    console.log(recipeDetail)
    const {_id,likes,name,num_recipes,years_of_experience,picture,category__id,description,recipes
    } =recipeDetail;
    return (
       <>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mb-10 lg:pl-10 pt-10 bg-purple-100'>
            <div className='lg:ml-20'>
            <LazyLoad className='w-full sm:h-[90vh] lg:h-[500px]'  offset={300}>
                <img src={picture} className='rounded-full sm:w-1/2 lg:w-4/5' alt="" />
                </LazyLoad>
            </div>
            <div className='sm:mt-10 lg:ml-10 lg:mt-32'>
                <h3 className='text-2xl font-bold text-fuchsia-700'>Chef Name: {name}</h3>
                <p className='mt-3'><span className='font-bold text-xl'>Short Description: </span>{description}</p>
                <p className='mt-6'><span className='font-bold text-xl'>Likes:</span> {likes}</p>
                <p><span className='font-bold text-xl'>Number of Recipes:</span> {num_recipes}</p>
                <p><span className='font-bold text-xl'>Experience in Years:</span> {years_of_experience}</p>

            </div>

            
           
        </div>
         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {
            recipes.map(recipes => <RecipeProcess key={recipes._id} recipes={recipes}></RecipeProcess>)
        }
         </div>
       </>
    );
};

export default SingleRecipeDetail;