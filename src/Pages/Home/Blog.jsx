import React, { useRef } from 'react';

import Pdf from "react-to-pdf";
import { FaFilePdf } from "react-icons/fa";

const Blog = () => {
    const ref = React.createRef();
    return (
        <div>
            <div className="App text-center mt-4">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) =><div>
        <p>PDF</p> <button onClick={toPdf} ><FaFilePdf className='text-red-700 h-12 w-12'></FaFilePdf></button>
            </div>}
      </Pdf>
      <div ref={ref}>
        <h1 className='text-fuchsia-500 text-2xl font-bold'>Learn More about React and Node js </h1>
        <div className='grid grid-cols-2 gap-10 m-6'>
        <div tabIndex={0} className="collapse collapse-arrow border-2 border-fuchsia-500 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content">
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border-2 border-fuchsia-500 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content">
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border-2 border-fuchsia-500 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content">
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border-2 border-fuchsia-500 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content">
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Blog;