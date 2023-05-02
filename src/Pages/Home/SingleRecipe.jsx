import React from 'react';

const SingleRecipe = ({recipe}) => {
    console.log(recipe)
    const {_id,likes,name,num_recipes,years_of_experience,picture} = recipe;
    return (
        <div className='my-10 w-full'>
            <div className="card card-side bg-base-100 shadow-xl sm:w-[50%] md:w-[80%] md:p-8 mx-auto">
  <figure><img src={picture} className='sm:max-w-fit lg:w-96 h-[80%]' alt="Recipe"/></figure>
  <div className="card-body ml-4">
    <h2 className="card-title text-xl">{name}</h2>
    <p><span className='font-bold'>Experience:</span> {years_of_experience}</p>
    <p><span className='font-bold'>Number of Recipes:</span> {num_recipes}</p>
    <p><span className='font-bold'>Likes:</span> {likes}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Recipes </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleRecipe;