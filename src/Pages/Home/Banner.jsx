import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner sm:w-full relative'>
            <div className='bg-white text-black w-1/4 absolute top-14 left-[40%] p-8 rounded-sm'>
            <h1 className='text-3xl title-text font-bold'>"Going Beyond Guacamole: Exploring the Many Delicious Avocado Dishes in Mexican Cuisine"</h1>
            <p className='mt-2'>Mexican cuisine is famous for its bold and vibrant flavors, as well as its use of fresh ingredients, spices, and herbs. From spicy chiles and tangy lime juice to fragrant cilantro and rich avocado, Mexican dishes are known for their delicious complexity. </p>
            </div>
        </div>
    );
};

export default Banner;