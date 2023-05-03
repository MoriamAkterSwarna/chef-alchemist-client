import React, { useRef } from 'react';

import Pdf from "react-to-pdf";
import { FaFilePdf } from "react-icons/fa";

const Blog = () => {
    const ref = React.createRef();
    return (
        <div>
            <div className="App mt-4 lg:mb-72">
      <Pdf targetRef={ref} filename="Blog.pdf">
        {({ toPdf }) =>(<div  className=' text-center'>
        <p >PDF</p> <button onClick={toPdf}><FaFilePdf className='text-red-700 h-12 w-12'></FaFilePdf></button>
            </div>)}
      </Pdf>
      <div ref={ref}>
        <h1 className='text-fuchsia-500 text-3xl font-bold ml-6'>Learn More about React and Node js </h1>
        <div className='grid grid-cols-1 gap-10 m-6'>
        <div tabIndex={0} className="collapse collapse-arrow border-2 border-fuchsia-500 bg-violet-400 rounded-box w-1/2">
  <div className="collapse-title text-xl font-medium overflow-clip">
  Tell us the differences between uncontrolled and controlled components.
  </div>
  <div className="collapse-content">
    <div><p>In React, components can be broadly classified into two categories: controlled components and uncontrolled components. The key difference between these two types of components is how they manage and update their state. </p>
    <span className='font-bold'>Controlled Components: </span>
    <p>Controlled components are those that explicitly manage their state via props passed down from their parent component. This means that the parent component is responsible for handling and updating the state of the controlled component. Controlled components typically have an onChange handler that triggers a state update in the parent component whenever a user interacts with the component.</p>
    <br />
    <span className='font-bold'>Uncontrolled Components: </span>
    <p>Uncontrolled components manage their own state internally, without any intervention from the parent component. Uncontrolled components typically use refs to access the current state of the component, which can be retrieved at any time. Examples of uncontrolled components include input elements and form elements.</p>
    </div>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border-2 border-fuchsia-500   rounded-box bg-red-400 w-1/2">
  <div className="collapse-title text-xl font-medium">
  How to validate React props using PropTypes
  </div>
  <div className="collapse-content">
    <p>To validate React props using PropTypes, you can use the PropTypes package, which is included with React. <br />

PropTypes is a library that provides a way to specify the expected types for props that are passed to a React component. It is used to ensure that the data being passed as props is of the expected type.
<br />
<p>If a prop is passed to the component that does not match its expected type, a warning will be logged in the console. This can be very helpful for catching bugs early on in the development process.

It's important to note that PropTypes are not enforced in production mode, so it's still important to handle unexpected prop types gracefully in your code.</p>
</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border-2 border-fuchsia-500  rounded-box w-1/2 bg-violet-400">
  <div className="collapse-title text-xl font-medium">
  Tell us the difference between nodejs and express js.
  </div>
  <div className="collapse-content">
    <div>
        <span className='font-bold'>Node js: </span>
        <p>Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. It provides a platform for building server-side applications in JavaScript. Node.js is built on top of the V8 JavaScript engine used in Google Chrome and provides an event-driven, non-blocking I/O model that makes it efficient and scalable.</p>
        <span className='font-bold'>Express js: </span>
        <p>Express.js is a popular web framework for Node.js. It provides a set of features for building web applications and APIs in Node.js. Express.js is built on top of Node.js and provides a simpler and more convenient way to handle web requests and responses, manage routes, and work with templates and views.</p>
        <span className='font-bold'>Some key difference: </span>
        <ol>
            <li>Node.js provides a runtime environment for running JavaScript code, whereas Express.js provides a framework for building web applications and APIs.</li>
            <li>Node.js is a low-level platform, providing only basic functionality such as file system and network I/O, while Express.js adds higher-level features such as middleware, routing, and templating.</li>
            <li>Node.js can be used to build a wide variety of applications, while Express.js is primarily focused on building web applications and APIs.</li>
            <li>Node.js has a steeper learning curve and requires more low-level programming, while Express.js provides a simpler and more convenient way to work with HTTP requests and responses.</li>

        </ol>
    </div>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border-2 border-fuchsia-500  rounded-box w-1/2  bg-red-400">
  <div className="collapse-title text-xl font-medium">
  What is a custom hook, and why will you create a custom hook?
  </div>
  <div className="collapse-content">
    <div>
        <p>In React, a custom hook is a reusable function that contains stateful logic and can be shared across multiple components. Custom hooks allow you to abstract away complex logic into a separate function, making it easier to reuse and maintain your code.</p>
        <p>You might create a custom hook for a variety of reasons, such as:</p>
        <ul>
            <li>Reusing code: If you find yourself writing similar logic in multiple components, you can create a custom hook to abstract away that logic and reuse it across those components.</li>
            <li>Encapsulating stateful logic: Sometimes, you might have complex stateful logic that you want to encapsulate into a separate function. A custom hook allows you to do this, making your code more organized and easier to maintain.</li>
            <li>Improving readability: If you have complex code that is hard to read and understand, a custom hook can help improve readability by abstracting away the complexity into a separate function with a descriptive name.</li>
        </ul>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Blog;