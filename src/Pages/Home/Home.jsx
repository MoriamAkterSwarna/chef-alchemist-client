import React from 'react';
import Banner from './Banner';
import RecipeCards from './RecipeCards';
import LatestRecipe from './Latest/LatestRecipe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecipeCards></RecipeCards>
            <LatestRecipe></LatestRecipe>
        </div>
    );
};

export default Home;