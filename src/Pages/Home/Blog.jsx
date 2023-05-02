import React, { useRef } from 'react';
import { FaFilePdf } from "react-icons/fa";
// import { useReactToPrint } from 'react-to-print';

const Blog = () => {
    const componentRef= useRef();
    const handlePdf= useReactToPrint({
        content: () => componentRef.current,
    })
    return (
        <div>
            <h3>Blog</h3>
            <button onClick={handlePdf}><FaFilePdf className='h-10 w-10'></FaFilePdf></button> 
             <div ref={componentRef}> 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur similique minus, accusantium aperiam fugiat incidunt possimus doloremque ducimus quas officiis aspernatur a quis sapiente error earum mollitia voluptas aut fugit?</p>
            </div>
        </div>
    );
};

export default Blog;