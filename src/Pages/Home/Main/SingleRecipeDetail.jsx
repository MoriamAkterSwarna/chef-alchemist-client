import React from 'react';

const SingleRecipeDetail = ({recipeDetail}) => {
    console.log(recipeDetail)
    const {_id,likes,name,num_recipes,years_of_experience,picture,category__id,description
    } =recipeDetail;
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mb-10 lg:pl-10 py-10 bg-purple-100'>
            <div>
                <img src={picture} className='rounded-full' alt="" />
            </div>
            <div className='sm:mt-2 lg:mt-20 lg:ml-10'>
                <h3 className='text-2xl font-bold text-fuchsia-700'>Chef Name: {name}</h3>
                <p className='mt-3'><span className='font-bold text-xl'>Short Description: </span>{description}</p>
                <p className='mt-6'><span className='font-bold text-xl'>Likes:</span> {likes}</p>
                <p><span className='font-bold text-xl'>Number of Recipes:</span> {num_recipes}</p>
                <p><span className='font-bold text-xl'>Experience:</span> {years_of_experience}</p>

            </div>

            
        </div>
    );
};

export default SingleRecipeDetail;