import React from 'react';
import { Link } from 'react-router-dom';

const SingleRecipe = ({recipe}) => {
    // console.log(recipe)
    const {_id,likes,name,num_recipes,years_of_experience,picture,category__id} = recipe;
    // console.log(category__id)
    return (
        <div className='my-10 w-full'>
            <div className="card card-side bg-base-100 shadow-lg sm:w-[50%] md:w-full lg:w-[90%] mx-auto">
  <figure><img src={picture} className='sm:max-w-fit lg:w-96 h-[80%] sm:p-3' alt="Recipe"/></figure>
  <div className="card-body ml-4">
    <h2 className="card-title text-xl">{name}</h2>
    <p><span className='font-bold'>Experience:</span> {years_of_experience}</p>
    <p><span className='font-bold'>Number of Recipes:</span> {num_recipes}</p>
    <p><span className='font-bold'>Likes:</span> {likes}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={`/recipe/${category__id}`}>View Recipes</Link> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleRecipe;