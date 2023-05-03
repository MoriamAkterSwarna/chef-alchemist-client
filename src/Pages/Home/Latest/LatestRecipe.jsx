import React, { useEffect, useState } from 'react';
import SingleLatestRecipe from './SingleLatestRecipe';

const LatestRecipe = () => {
    const [latest, setLatest] = useState([])
    useEffect(() =>{
        fetch("https://cooking-alchemist-server-moriamakterswarna.vercel.app/latest")
        .then(res => res.json())
        .then(data => setLatest(data))
    },[])
    return (
        <div>
            <div className='text-center'>
            <h2 className='text-4xl font-bold title-text mb-4
            '>Latest Recipe</h2>
            </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
           
            {
                latest.map(latest => <SingleLatestRecipe key={latest.latest_recipe_id} latest={latest}></SingleLatestRecipe>)
            }
        </div>
        </div>
    );
};

export default LatestRecipe;