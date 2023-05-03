import React from 'react';

const SingleLatestRecipe = ({latest}) => {
    console.log(latest)
    const {recipe_name,latest_recipe_id,recipe_type,img,health_benefit} =latest
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-10">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {recipe_name}
      <div className="badge badge-secondary">Latest</div>
    </h2>
    <div>
        <p className='font-bold'>Health Benefit: </p>
        <ul>
            {
                health_benefit.map(benefit => <li>{benefit}</li>)
            }
        </ul>
    </div>
    <div className="card-actions justify-end">
      
      <div className="badge badge-outline">{recipe_type}</div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default SingleLatestRecipe;