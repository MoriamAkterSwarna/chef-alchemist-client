import React from 'react';
import Banner from './Banner';
import RecipeCards from './RecipeCards';
import LatestRecipe from './Latest/LatestRecipe';
import Contact from './Contact/Contact';



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <RecipeCards></RecipeCards>
            <LatestRecipe></LatestRecipe>
            <Contact></Contact>
        </div>
    );
};

export default Home;